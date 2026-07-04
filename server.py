from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import json
import shutil
import socket
import sqlite3
from pathlib import Path
from datetime import datetime
from urllib.parse import urlparse


ROOT = Path(__file__).resolve().parent
DB_PATH = ROOT / "bolao_familia_medeiros.db"
BACKUP_DIR = ROOT / "backups"


def connect():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    BACKUP_DIR.mkdir(exist_ok=True)
    with connect() as conn:
        conn.executescript(
            """
            create table if not exists participants (
                id text primary key,
                name text not null,
                birthdate text not null,
                favorite_color text not null default '#12694f',
                face_key text not null default '',
                face_data text not null default ''
            );

            create table if not exists predictions (
                participant_id text not null,
                match_id integer not null,
                home integer not null,
                away integer not null,
                primary key (participant_id, match_id),
                foreign key (participant_id) references participants(id) on delete cascade
            );

            create table if not exists results (
                match_id integer primary key,
                home integer not null,
                away integer not null,
                pen_home integer,
                pen_away integer
            );

            create table if not exists cancelled_matches (
                match_id integer primary key
            );
            """
        )
        columns = {
            row["name"]
            for row in conn.execute("pragma table_info(participants)")
        }
        if "favorite_color" not in columns:
            conn.execute(
                "alter table participants add column favorite_color text not null default '#12694f'"
            )
        if "face_key" not in columns:
            conn.execute(
                "alter table participants add column face_key text not null default ''"
            )
        if "face_data" not in columns:
            conn.execute(
                "alter table participants add column face_data text not null default ''"
            )
        result_columns = {
            row["name"]
            for row in conn.execute("pragma table_info(results)")
        }
        if "pen_home" not in result_columns:
            conn.execute("alter table results add column pen_home integer")
        if "pen_away" not in result_columns:
            conn.execute("alter table results add column pen_away integer")


def read_state():
    with connect() as conn:
        participants = [
            dict(row)
            for row in conn.execute(
                """
                select id, name, birthdate, favorite_color as favoriteColor, face_data as faceData
                from participants
                order by name collate nocase
                """
            )
        ]
        for participant in participants:
            participant["face"] = parse_face(participant.pop("faceData", ""))

        predictions = {}
        for row in conn.execute(
            "select participant_id, match_id, home, away from predictions"
        ):
            by_participant = predictions.setdefault(row["participant_id"], {})
            by_participant[str(row["match_id"])] = {
                "home": row["home"],
                "away": row["away"],
            }

        results = {}
        for row in conn.execute("select match_id, home, away, pen_home, pen_away from results"):
            score = {"home": row["home"], "away": row["away"]}
            if row["pen_home"] is not None and row["pen_away"] is not None:
                score["penHome"] = row["pen_home"]
                score["penAway"] = row["pen_away"]
            results[str(row["match_id"])] = score

        cancelled_matches = [
            str(row["match_id"])
            for row in conn.execute("select match_id from cancelled_matches")
        ]

    return {
        "participants": participants,
        "predictions": predictions,
        "results": results,
        "cancelledMatches": cancelled_matches,
    }


def replace_state(state):
    participants = state.get("participants") if isinstance(state, dict) else []
    predictions = state.get("predictions") if isinstance(state, dict) else {}
    results = state.get("results") if isinstance(state, dict) else {}
    cancelled = state.get("cancelledMatches") if isinstance(state, dict) else []

    with connect() as conn:
        conn.execute("delete from predictions")
        conn.execute("delete from results")
        conn.execute("delete from cancelled_matches")
        conn.execute("delete from participants")

        for participant in participants or []:
            conn.execute(
                """
                insert into participants (id, name, birthdate, favorite_color, face_data)
                values (?, ?, ?, ?, ?)
                """,
                (
                    str(participant.get("id", "")),
                    str(participant.get("name", "")).strip(),
                    str(participant.get("birthdate", "")),
                    normalize_color(participant.get("favoriteColor")),
                    serialize_face(participant.get("face")),
                ),
            )

        for participant_id, by_match in (predictions or {}).items():
            for match_id, score in (by_match or {}).items():
                if has_score(score):
                    conn.execute(
                        """
                        insert into predictions (participant_id, match_id, home, away)
                        values (?, ?, ?, ?)
                        """,
                        (
                            str(participant_id),
                            int(match_id),
                            int(score["home"]),
                            int(score["away"]),
                        ),
                    )

        for match_id, score in (results or {}).items():
            if has_score(score):
                conn.execute(
                    """
                    insert into results (match_id, home, away, pen_home, pen_away)
                    values (?, ?, ?, ?, ?)
                    """,
                    (
                        int(match_id),
                        int(score["home"]),
                        int(score["away"]),
                        optional_int(score.get("penHome")),
                        optional_int(score.get("penAway")),
                    ),
                )

        for match_id in cancelled or []:
            conn.execute(
                "insert into cancelled_matches (match_id) values (?)",
                (int(match_id),),
            )


def has_score(score):
    if not isinstance(score, dict):
        return False
    return isinstance(score.get("home"), int) and isinstance(score.get("away"), int)


def optional_int(value):
    return int(value) if isinstance(value, int) else None


def normalize_color(value):
    value = str(value or "#12694f").strip()
    if len(value) == 7 and value.startswith("#"):
        try:
            int(value[1:], 16)
            return value.lower()
        except ValueError:
            pass
    return "#12694f"


def serialize_face(value):
    if not isinstance(value, dict):
        return ""
    try:
        x = max(0, min(100, float(value.get("x"))))
        y = max(0, min(100, float(value.get("y"))))
        size = max(8, min(28, float(value.get("size", 16))))
    except (TypeError, ValueError):
        return ""
    return json.dumps({"x": round(x, 2), "y": round(y, 2), "size": round(size, 2)})


def parse_face(value):
    try:
        parsed = json.loads(value or "{}")
    except json.JSONDecodeError:
        return None
    if not isinstance(parsed, dict):
        return None
    serialized = serialize_face(parsed)
    return json.loads(serialized) if serialized else None


def create_backup():
    BACKUP_DIR.mkdir(exist_ok=True)
    timestamp = datetime.now().strftime("%Y%m%d-%H%M%S")
    backup_path = BACKUP_DIR / f"bolao-familia-medeiros-{timestamp}.db"
    if DB_PATH.exists():
        shutil.copy2(DB_PATH, backup_path)
    else:
        init_db()
        shutil.copy2(DB_PATH, backup_path)
    return backup_path


def latest_backup():
    BACKUP_DIR.mkdir(exist_ok=True)
    backups = sorted(BACKUP_DIR.glob("bolao-familia-medeiros-*.db"))
    return backups[-1] if backups else None


def backup_payload(path):
    return {
        "file": path.name,
        "createdAt": datetime.fromtimestamp(path.stat().st_mtime).isoformat(timespec="seconds"),
    }


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def do_GET(self):
        path = urlparse(self.path).path
        if path == "/api/state":
            self.send_json(read_state())
            return
        if path == "/api/backup/latest":
            backup = latest_backup()
            self.send_json({"backup": backup_payload(backup) if backup else None})
            return
        super().do_GET()

    def do_POST(self):
        path = urlparse(self.path).path
        if path == "/api/state":
            payload = self.read_json()
            replace_state(payload)
            self.send_json(read_state())
            return
        if path == "/api/backup":
            backup = create_backup()
            self.send_json({"backup": backup_payload(backup)})
            return
        if path == "/api/restore-latest-backup":
            backup = latest_backup()
            if not backup:
                self.send_json({"error": "Nenhum backup encontrado."}, status=404)
                return
            shutil.copy2(backup, DB_PATH)
            init_db()
            self.send_json({"backup": backup_payload(backup), "state": read_state()})
            return
        self.send_error(404, "API endpoint not found")

    def read_json(self):
        length = int(self.headers.get("Content-Length", "0"))
        raw = self.rfile.read(length).decode("utf-8") if length else "{}"
        return json.loads(raw or "{}")

    def send_json(self, payload, status=200):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


class ReusableThreadingHTTPServer(ThreadingHTTPServer):
    allow_reuse_address = True


def local_ip():
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as sock:
            sock.connect(("8.8.8.8", 80))
            return sock.getsockname()[0]
    except OSError:
        return "seu-ip-local"


if __name__ == "__main__":
    init_db()
    server = ReusableThreadingHTTPServer(("0.0.0.0", 5173), Handler)
    print("Bolão Família Medeiros em http://localhost:5173")
    print(f"Banco SQLite: {DB_PATH}")
    server.serve_forever()

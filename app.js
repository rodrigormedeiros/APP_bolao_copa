const matches = [
  { id: 1, group: "A", date: "2026-06-11", time: "16:00 BRT", stadium: "Cidade do Mexico", home: "Mexico", away: "Africa do Sul" },
  { id: 2, group: "A", date: "2026-06-11", time: "23:00 BRT", stadium: "Guadalajara", home: "Republica da Coreia", away: "Republica Tcheca" },
  { id: 3, group: "B", date: "2026-06-12", time: "16:00 BRT", stadium: "Toronto", home: "Canada", away: "Bosnia e Herzegovina" },
  { id: 4, group: "D", date: "2026-06-12", time: "22:00 BRT", stadium: "Los Angeles", home: "Estados Unidos", away: "Paraguai" },
  { id: 5, group: "B", date: "2026-06-13", time: "16:00 BRT", stadium: "Santa Clara", home: "Catar", away: "Suica" },
  { id: 6, group: "C", date: "2026-06-13", time: "19:00 BRT", stadium: "Nova York/Nova Jersey", home: "Brasil", away: "Marrocos" },
  { id: 7, group: "C", date: "2026-06-13", time: "22:00 BRT", stadium: "Boston", home: "Haiti", away: "Escocia" },
  { id: 8, group: "D", date: "2026-06-13", time: "01:00 BRT", stadium: "Vancouver", home: "Australia", away: "Turquia" },
  { id: 9, group: "E", date: "2026-06-14", time: "14:00 BRT", stadium: "Houston", home: "Alemanha", away: "Curacao" },
  { id: 10, group: "F", date: "2026-06-14", time: "17:00 BRT", stadium: "Dallas", home: "Holanda", away: "Japao" },
  { id: 11, group: "E", date: "2026-06-14", time: "20:00 BRT", stadium: "Filadelfia", home: "Costa do Marfim", away: "Equador" },
  { id: 12, group: "F", date: "2026-06-14", time: "23:00 BRT", stadium: "Monterrey", home: "Suecia", away: "Tunisia" },
  { id: 13, group: "H", date: "2026-06-15", time: "13:00 BRT", stadium: "Atlanta", home: "Espanha", away: "Cabo Verde" },
  { id: 14, group: "G", date: "2026-06-15", time: "16:00 BRT", stadium: "Seattle", home: "Belgica", away: "Egito" },
  { id: 15, group: "H", date: "2026-06-15", time: "19:00 BRT", stadium: "Miami", home: "Arabia Saudita", away: "Uruguai" },
  { id: 16, group: "G", date: "2026-06-15", time: "22:00 BRT", stadium: "Los Angeles", home: "Ira", away: "Nova Zelandia" },
  { id: 17, group: "I", date: "2026-06-16", time: "16:00 BRT", stadium: "Nova York/Nova Jersey", home: "Franca", away: "Senegal" },
  { id: 18, group: "I", date: "2026-06-16", time: "19:00 BRT", stadium: "Boston", home: "Iraque", away: "Noruega" },
  { id: 19, group: "J", date: "2026-06-16", time: "22:00 BRT", stadium: "Kansas City", home: "Argentina", away: "Argelia" },
  { id: 20, group: "J", date: "2026-06-16", time: "01:00 BRT", stadium: "Santa Clara", home: "Austria", away: "Jordania" },
  { id: 21, group: "K", date: "2026-06-17", time: "14:00 BRT", stadium: "Houston", home: "Portugal", away: "Congo" },
  { id: 22, group: "L", date: "2026-06-17", time: "17:00 BRT", stadium: "Dallas", home: "Inglaterra", away: "Croacia" },
  { id: 23, group: "L", date: "2026-06-17", time: "20:00 BRT", stadium: "Toronto", home: "Gana", away: "Panama" },
  { id: 24, group: "K", date: "2026-06-17", time: "21:00 BRT", stadium: "Cidade do Mexico", home: "Uzbequistao", away: "Colombia" },
  { id: 25, group: "A", date: "2026-06-18", time: "13:00 BRT", stadium: "Atlanta", home: "Republica Tcheca", away: "Africa do Sul" },
  { id: 26, group: "B", date: "2026-06-18", time: "16:00 BRT", stadium: "Los Angeles", home: "Suica", away: "Bosnia e Herzegovina" },
  { id: 27, group: "B", date: "2026-06-18", time: "19:00 BRT", stadium: "Vancouver", home: "Canada", away: "Catar" },
  { id: 28, group: "A", date: "2026-06-18", time: "22:00 BRT", stadium: "Guadalajara", home: "Mexico", away: "Republica da Coreia" },
  { id: 29, group: "D", date: "2026-06-19", time: "16:00 BRT", stadium: "Seattle", home: "Estados Unidos", away: "Australia" },
  { id: 30, group: "C", date: "2026-06-19", time: "19:00 BRT", stadium: "Boston", home: "Escocia", away: "Marrocos" },
  { id: 31, group: "C", date: "2026-06-19", time: "21:30 BRT", stadium: "Filadelfia", home: "Brasil", away: "Haiti" },
  { id: 32, group: "D", date: "2026-06-19", time: "00:00 BRT", stadium: "Santa Clara", home: "Turquia", away: "Paraguai" },
  { id: 33, group: "F", date: "2026-06-20", time: "14:00 BRT", stadium: "Houston", home: "Holanda", away: "Suecia" },
  { id: 34, group: "E", date: "2026-06-20", time: "17:00 BRT", stadium: "Toronto", home: "Alemanha", away: "Costa do Marfim" },
  { id: 35, group: "E", date: "2026-06-20", time: "21:00 BRT", stadium: "Kansas City", home: "Equador", away: "Curacao" },
  { id: 36, group: "F", date: "2026-06-20", time: "23:00 BRT", stadium: "Monterrey", home: "Tunisia", away: "Japao" },
  { id: 37, group: "H", date: "2026-06-21", time: "13:00 BRT", stadium: "Atlanta", home: "Espanha", away: "Arabia Saudita" },
  { id: 38, group: "G", date: "2026-06-21", time: "16:00 BRT", stadium: "Los Angeles", home: "Belgica", away: "Ira" },
  { id: 39, group: "H", date: "2026-06-21", time: "19:00 BRT", stadium: "Miami", home: "Uruguai", away: "Cabo Verde" },
  { id: 40, group: "G", date: "2026-06-21", time: "22:00 BRT", stadium: "Vancouver", home: "Nova Zelandia", away: "Egito" },
  { id: 41, group: "J", date: "2026-06-22", time: "14:00 BRT", stadium: "Dallas", home: "Argentina", away: "Austria" },
  { id: 42, group: "I", date: "2026-06-22", time: "18:00 BRT", stadium: "Filadelfia", home: "Franca", away: "Iraque" },
  { id: 43, group: "I", date: "2026-06-22", time: "21:00 BRT", stadium: "Nova York/Nova Jersey", home: "Noruega", away: "Senegal" },
  { id: 44, group: "J", date: "2026-06-22", time: "00:00 BRT", stadium: "Santa Clara", home: "Jordania", away: "Argelia" },
  { id: 45, group: "K", date: "2026-06-23", time: "14:00 BRT", stadium: "Houston", home: "Portugal", away: "Uzbequistao" },
  { id: 46, group: "L", date: "2026-06-23", time: "17:00 BRT", stadium: "Boston", home: "Inglaterra", away: "Gana" },
  { id: 47, group: "L", date: "2026-06-23", time: "20:00 BRT", stadium: "Toronto", home: "Panama", away: "Croacia" },
  { id: 48, group: "K", date: "2026-06-23", time: "23:00 BRT", stadium: "Guadalajara", home: "Colombia", away: "Congo" },
  { id: 49, group: "B", date: "2026-06-24", time: "16:00 BRT", stadium: "Vancouver", home: "Suica", away: "Canada" },
  { id: 50, group: "B", date: "2026-06-24", time: "16:00 BRT", stadium: "Seattle", home: "Bosnia e Herzegovina", away: "Catar" },
  { id: 51, group: "C", date: "2026-06-24", time: "19:00 BRT", stadium: "Miami", home: "Brasil", away: "Escocia" },
  { id: 52, group: "C", date: "2026-06-24", time: "19:00 BRT", stadium: "Atlanta", home: "Marrocos", away: "Haiti" },
  { id: 53, group: "A", date: "2026-06-24", time: "22:00 BRT", stadium: "Cidade do Mexico", home: "Republica Tcheca", away: "Mexico" },
  { id: 54, group: "A", date: "2026-06-24", time: "22:00 BRT", stadium: "Monterrey", home: "Africa do Sul", away: "Republica da Coreia" },
  { id: 55, group: "E", date: "2026-06-25", time: "17:00 BRT", stadium: "Nova York/Nova Jersey", home: "Equador", away: "Alemanha" },
  { id: 56, group: "E", date: "2026-06-25", time: "17:00 BRT", stadium: "Filadelfia", home: "Curacao", away: "Costa do Marfim" },
  { id: 57, group: "F", date: "2026-06-25", time: "20:00 BRT", stadium: "Kansas City", home: "Tunisia", away: "Holanda" },
  { id: 58, group: "F", date: "2026-06-25", time: "20:00 BRT", stadium: "Dallas", home: "Japao", away: "Suecia" },
  { id: 59, group: "D", date: "2026-06-25", time: "23:00 BRT", stadium: "Los Angeles", home: "Turquia", away: "Estados Unidos" },
  { id: 60, group: "D", date: "2026-06-25", time: "23:00 BRT", stadium: "Santa Clara", home: "Paraguai", away: "Australia" },
  { id: 61, group: "I", date: "2026-06-26", time: "16:00 BRT", stadium: "Boston", home: "Noruega", away: "Franca" },
  { id: 62, group: "I", date: "2026-06-26", time: "16:00 BRT", stadium: "Toronto", home: "Senegal", away: "Iraque" },
  { id: 63, group: "H", date: "2026-06-26", time: "21:00 BRT", stadium: "Guadalajara", home: "Uruguai", away: "Espanha" },
  { id: 64, group: "H", date: "2026-06-26", time: "21:00 BRT", stadium: "Houston", home: "Cabo Verde", away: "Arabia Saudita" },
  { id: 65, group: "G", date: "2026-06-26", time: "00:00 BRT", stadium: "Vancouver", home: "Nova Zelandia", away: "Belgica" },
  { id: 66, group: "G", date: "2026-06-26", time: "00:00 BRT", stadium: "Seattle", home: "Egito", away: "Ira" },
  { id: 67, group: "L", date: "2026-06-27", time: "18:00 BRT", stadium: "Nova York/Nova Jersey", home: "Panama", away: "Inglaterra" },
  { id: 68, group: "L", date: "2026-06-27", time: "18:00 BRT", stadium: "Filadelfia", home: "Croacia", away: "Gana" },
  { id: 69, group: "K", date: "2026-06-27", time: "20:30 BRT", stadium: "Miami", home: "Colombia", away: "Portugal" },
  { id: 70, group: "K", date: "2026-06-27", time: "20:30 BRT", stadium: "Atlanta", home: "Congo", away: "Uzbequistao" },
  { id: 71, group: "J", date: "2026-06-27", time: "23:00 BRT", stadium: "Dallas", home: "Argentina", away: "Jordania" },
  { id: 72, group: "J", date: "2026-06-27", time: "23:00 BRT", stadium: "Kansas City", home: "Argelia", away: "Austria" },
  { id: 73, group: "16 avos", phase: "knockout", date: "2026-06-28", time: "16:00 BRT", stadium: "Los Angeles", home: "Africa do Sul", away: "Canada" },
  { id: 74, group: "16 avos", phase: "knockout", date: "2026-06-29", time: "17:30 BRT", stadium: "Boston", home: "Alemanha", away: "Paraguai" },
  { id: 75, group: "16 avos", phase: "knockout", date: "2026-06-29", time: "22:00 BRT", stadium: "Monterrey", home: "Holanda", away: "Marrocos" },
  { id: 76, group: "16 avos", phase: "knockout", date: "2026-06-29", time: "14:00 BRT", stadium: "Houston", home: "Brasil", away: "Japao" },
  { id: 77, group: "16 avos", phase: "knockout", date: "2026-06-30", time: "18:00 BRT", stadium: "Nova York/Nova Jersey", home: "Franca", away: "Suecia" },
  { id: 78, group: "16 avos", phase: "knockout", date: "2026-06-30", time: "14:00 BRT", stadium: "Dallas", home: "Costa do Marfim", away: "Noruega" },
  { id: 79, group: "16 avos", phase: "knockout", date: "2026-06-30", time: "22:00 BRT", stadium: "Cidade do Mexico", home: "Mexico", away: "Equador" },
  { id: 80, group: "16 avos", phase: "knockout", date: "2026-07-01", time: "13:00 BRT", stadium: "Atlanta", home: "Inglaterra", away: "Congo" },
  { id: 81, group: "16 avos", phase: "knockout", date: "2026-07-01", time: "21:00 BRT", stadium: "Santa Clara", home: "Estados Unidos", away: "Bosnia e Herzegovina" },
  { id: 82, group: "16 avos", phase: "knockout", date: "2026-07-01", time: "17:00 BRT", stadium: "Seattle", home: "Belgica", away: "Senegal" },
  { id: 83, group: "16 avos", phase: "knockout", date: "2026-07-02", time: "20:00 BRT", stadium: "Toronto", home: "Portugal", away: "Croacia" },
  { id: 84, group: "16 avos", phase: "knockout", date: "2026-07-02", time: "16:00 BRT", stadium: "Los Angeles", home: "Espanha", away: "Austria" },
  { id: 85, group: "16 avos", phase: "knockout", date: "2026-07-03", time: "00:00 BRT", stadium: "Vancouver", home: "Suica", away: "Argelia" },
  { id: 86, group: "16 avos", phase: "knockout", date: "2026-07-03", time: "19:00 BRT", stadium: "Miami", home: "Argentina", away: "Cabo Verde" },
  { id: 87, group: "16 avos", phase: "knockout", date: "2026-07-03", time: "22:30 BRT", stadium: "Kansas City", home: "Colombia", away: "Gana" },
  { id: 88, group: "16 avos", phase: "knockout", date: "2026-07-03", time: "15:00 BRT", stadium: "Dallas", home: "Australia", away: "Egito" },
  { id: 89, group: "Oitavas", phase: "knockout", date: "2026-07-04", time: "18:00 BRT", stadium: "Filadelfia", home: "Paraguai", away: "Franca" },
  { id: 90, group: "Oitavas", phase: "knockout", date: "2026-07-04", time: "14:00 BRT", stadium: "Houston", home: "Canada", away: "Marrocos" },
  { id: 91, group: "Oitavas", phase: "knockout", date: "2026-07-05", time: "17:00 BRT", stadium: "Nova York/Nova Jersey", home: "Brasil", away: "Noruega" },
  { id: 92, group: "Oitavas", phase: "knockout", date: "2026-07-05", time: "21:00 BRT", stadium: "Cidade do Mexico", home: "Mexico", away: "Inglaterra" },
  { id: 93, group: "Oitavas", phase: "knockout", date: "2026-07-06", time: "16:00 BRT", stadium: "Dallas", home: "Portugal", away: "Espanha" },
  { id: 94, group: "Oitavas", phase: "knockout", date: "2026-07-06", time: "21:00 BRT", stadium: "Seattle", home: "Estados Unidos", away: "Belgica" },
  { id: 95, group: "Oitavas", phase: "knockout", date: "2026-07-07", time: "13:00 BRT", stadium: "Atlanta", home: "Argentina", away: "Egito" },
  { id: 96, group: "Oitavas", phase: "knockout", date: "2026-07-07", time: "17:00 BRT", stadium: "Vancouver", home: "Suica", away: "Colombia" },
  { id: 97, group: "Quartas", phase: "knockout", date: "2026-07-09", time: "17:00 BRT", stadium: "Boston", home: "Vencedor Jogo 89", away: "Vencedor Jogo 90" },
  { id: 98, group: "Quartas", phase: "knockout", date: "2026-07-10", time: "16:00 BRT", stadium: "Los Angeles", home: "Vencedor Jogo 93", away: "Vencedor Jogo 94" },
  { id: 99, group: "Quartas", phase: "knockout", date: "2026-07-11", time: "18:00 BRT", stadium: "Miami", home: "Vencedor Jogo 91", away: "Vencedor Jogo 92" },
  { id: 100, group: "Quartas", phase: "knockout", date: "2026-07-11", time: "22:00 BRT", stadium: "Kansas City", home: "Vencedor Jogo 95", away: "Vencedor Jogo 96" },
  { id: 101, group: "Semis", phase: "knockout", date: "2026-07-14", time: "16:00 BRT", stadium: "Dallas", home: "Vencedor Jogo 97", away: "Vencedor Jogo 98" },
  { id: 102, group: "Semis", phase: "knockout", date: "2026-07-15", time: "16:00 BRT", stadium: "Atlanta", home: "Vencedor Jogo 99", away: "Vencedor Jogo 100" },
  { id: 103, group: "Disputa 3\u00ba", phase: "knockout", date: "2026-07-18", time: "18:00 BRT", stadium: "Miami", home: "Perdedor Jogo 101", away: "Perdedor Jogo 102" },
  { id: 104, group: "Final", phase: "knockout", date: "2026-07-19", time: "16:00 BRT", stadium: "Nova York/Nova Jersey", home: "Vencedor Jogo 101", away: "Vencedor Jogo 102" }
];

const FAMILY_PHOTO = "assets/familia.jpeg";
const DEFAULT_FACE_SIZE = 16;
const FLAG_CODES = {
  "Africa do Sul": "ZA",
  Alemanha: "DE",
  "Arabia Saudita": "SA",
  Argelia: "DZ",
  Argentina: "AR",
  Australia: "AU",
  Austria: "AT",
  Belgica: "BE",
  "Bosnia e Herzegovina": "BA",
  Brasil: "BR",
  "Cabo Verde": "CV",
  Canada: "CA",
  Catar: "QA",
  Colombia: "CO",
  "Costa do Marfim": "CI",
  Croacia: "HR",
  Curacao: "CW",
  Egito: "EG",
  Equador: "EC",
  Escocia: "GB-SCT",
  Espanha: "ES",
  "Estados Unidos": "US",
  Franca: "FR",
  Gana: "GH",
  Haiti: "HT",
  Holanda: "NL",
  Inglaterra: "GB-ENG",
  Ira: "IR",
  Iraque: "IQ",
  Japao: "JP",
  Jordania: "JO",
  Marrocos: "MA",
  Mexico: "MX",
  Noruega: "NO",
  "Nova Zelandia": "NZ",
  Panama: "PA",
  Paraguai: "PY",
  Portugal: "PT",
  "Republica da Coreia": "KR",
  Congo: "CD",
  "Republica Tcheca": "CZ",
  Senegal: "SN",
  Suecia: "SE",
  Suica: "CH",
  Tunisia: "TN",
  Turquia: "TR",
  Uruguai: "UY",
  Uzbequistao: "UZ"
};

let state = normalizeState({});
let historyMode = "rank";
const KNOCKOUT_START_DATE = "2026-06-28";
const LOCAL_STORAGE_KEY = "bolao-familia-medeiros-state";
let sqliteAvailable = true;
const dom = {};

document.addEventListener("DOMContentLoaded", async () => {
  cacheDom();
  setupTabs();
  setupParticipants();
  setupPredictions();
  setupResults();
  setupBackup();
  setupFaceModal();
  setupPredictionModal();
  setupHistory();
  fillGroupFilters();
  state = await loadState();
  renderAll();
});

function cacheDom() {
  dom.tabs = document.querySelectorAll(".tab");
  dom.views = document.querySelectorAll(".view");
  dom.matchCount = document.getElementById("matchCount");
  dom.matchProgress = document.getElementById("matchProgress");
  dom.participantForm = document.getElementById("participantForm");
  dom.participantId = document.getElementById("participantId");
  dom.participantName = document.getElementById("participantName");
  dom.participantBirthdate = document.getElementById("participantBirthdate");
  dom.participantColor = document.getElementById("participantColor");
  dom.participantSubmit = document.getElementById("participantSubmit");
  dom.cancelEdit = document.getElementById("cancelEdit");
  dom.participantsTable = document.getElementById("participantsTable");
  dom.predictionParticipant = document.getElementById("predictionParticipant");
  dom.participantPicker = document.getElementById("participantPicker");
  dom.participantPickerButton = document.getElementById("participantPickerButton");
  dom.participantPickerMenu = document.getElementById("participantPickerMenu");
  dom.predictionSearch = document.getElementById("predictionSearch");
  dom.predictionGroup = document.getElementById("predictionGroup");
  dom.predictionMatches = document.getElementById("predictionMatches");
  dom.resultSearch = document.getElementById("resultSearch");
  dom.resultGroup = document.getElementById("resultGroup");
  dom.resultMatches = document.getElementById("resultMatches");
  dom.leaderboard = document.getElementById("leaderboard");
  dom.summaryGrid = document.getElementById("summaryGrid");
  dom.historyChart = document.getElementById("historyChart");
  dom.historyLegend = document.getElementById("historyLegend");
  dom.historyModes = document.querySelectorAll("[data-history-mode]");
  dom.exportData = document.getElementById("exportData");
  dom.importData = document.getElementById("importData");
  dom.restoreBackup = document.getElementById("restoreBackup");
  dom.clearData = document.getElementById("clearData");
  dom.emptyStateTemplate = document.getElementById("emptyStateTemplate");
  dom.faceModal = document.getElementById("faceModal");
  dom.faceModalTitle = document.getElementById("faceModalTitle");
  dom.faceHotspots = document.getElementById("faceHotspots");
  dom.skipFaceSelection = document.getElementById("skipFaceSelection");
  dom.closeFaceModal = document.getElementById("closeFaceModal");
  dom.familyPhoto = document.querySelector(".family-photo");
  dom.predictionModal = document.getElementById("predictionModal");
  dom.predictionModalTitle = document.getElementById("predictionModalTitle");
  dom.predictionModalSubtitle = document.getElementById("predictionModalSubtitle");
  dom.predictionModalList = document.getElementById("predictionModalList");
  dom.closePredictionModal = document.getElementById("closePredictionModal");
}

function setupTabs() {
  dom.tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      dom.tabs.forEach((item) => item.classList.remove("active"));
      dom.views.forEach((view) => view.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.view).classList.add("active");
      if (tab.dataset.view === "predictions") renderPredictionMatches();
      if (tab.dataset.view !== "predictions") applyPredictionTheme();
      if (tab.dataset.view === "results") {
        resetPredictionTheme();
        renderResultMatches();
      }
      if (tab.dataset.view === "dashboard") renderDashboard();
      if (tab.dataset.view === "history") renderHistory();
    });
  });
}

function setupParticipants() {
  dom.participantForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = dom.participantName.value.trim();
    const birthdate = dom.participantBirthdate.value;
    const favoriteColor = normalizeColor(dom.participantColor.value);
    const id = dom.participantId.value;
    let newParticipantId = "";

    if (!name || !birthdate) return;

    if (id) {
      const participant = state.participants.find((item) => item.id === id);
      if (participant) {
        participant.name = name;
        participant.birthdate = birthdate;
        participant.favoriteColor = favoriteColor;
      }
    } else {
      const participant = {
        id: crypto.randomUUID(),
        name,
        birthdate,
        favoriteColor
      };
      newParticipantId = participant.id;
      state.participants.push(participant);
    }

    state = await saveState();
    resetParticipantForm();
    renderAll();
    if (newParticipantId) openFaceModal(newParticipantId);
  });

  dom.cancelEdit.addEventListener("click", resetParticipantForm);
}

function setupPredictions() {
  dom.predictionParticipant.addEventListener("change", renderPredictionMatches);
  dom.participantPickerButton.addEventListener("click", toggleParticipantPicker);
  document.addEventListener("click", (event) => {
    if (!dom.participantPicker.contains(event.target)) closeParticipantPicker();
  });
  dom.predictionSearch.addEventListener("input", renderPredictionMatches);
  dom.predictionGroup.addEventListener("change", renderPredictionMatches);
}

function setupResults() {
  dom.resultSearch.addEventListener("input", renderResultMatches);
  dom.resultGroup.addEventListener("change", renderResultMatches);
  dom.resultMatches.addEventListener("click", (event) => {
    const button = event.target.closest("[data-show-predictions]");
    if (button) openPredictionModal(button.dataset.showPredictions);
  });
}

function setupHistory() {
  dom.historyModes.forEach((button) => {
    button.addEventListener("click", () => {
      historyMode = button.dataset.historyMode;
      dom.historyModes.forEach((item) => item.classList.toggle("active", item === button));
      renderHistory();
    });
  });
}

function setupBackup() {
  dom.exportData.addEventListener("click", () => {
    const payload = JSON.stringify(state, null, 2);
    const blob = new Blob([payload], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `bolao-familia-medeiros-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  });

  dom.importData.addEventListener("change", async (event) => {
    const [file] = event.target.files;
    if (!file) return;

    try {
      const imported = JSON.parse(await file.text());
      state = normalizeState(imported);
      state = await saveState();
      renderAll();
      event.target.value = "";
    } catch {
      alert("Não foi possível importar este arquivo.");
    }
  });

  dom.clearData.addEventListener("click", async () => {
    const typed = prompt("Para limpar o bolão, digite LIMPAR. Um backup será criado antes de apagar.");
    if (typed !== "LIMPAR") return;

    try {
      await requestJson("/api/backup", { method: "POST" });
      state = normalizeState({});
      state = await saveState();
      renderAll();
      alert("Bolão limpo. Um backup automático foi criado antes da limpeza.");
    } catch {
      alert("Não foi possível criar o backup. Nada foi apagado.");
    }
  });

  dom.restoreBackup.addEventListener("click", async () => {
    if (!confirm("Restaurar o último backup? Os dados atuais serão substituídos pelo backup mais recente.")) return;

    try {
      const payload = await requestJson("/api/restore-latest-backup", { method: "POST" });
      state = normalizeState(payload.state);
      renderAll();
      alert(`Backup restaurado: ${payload.backup?.file || "último backup"}.`);
    } catch {
      alert("Não foi possível restaurar o último backup.");
    }
  });
}

function setupFaceModal() {
  dom.skipFaceSelection.addEventListener("click", closeFaceModal);
  dom.closeFaceModal.addEventListener("click", closeFaceModal);
  dom.faceModal.addEventListener("click", (event) => {
    if (event.target === dom.faceModal) closeFaceModal();
  });
  dom.familyPhoto.addEventListener("click", selectFacePoint);
  dom.familyPhoto.addEventListener("mousemove", moveFacePreview);
  dom.familyPhoto.addEventListener("mouseleave", hideFacePreview);
}

function setupPredictionModal() {
  dom.closePredictionModal.addEventListener("click", closePredictionModal);
  dom.predictionModal.addEventListener("click", (event) => {
    if (event.target === dom.predictionModal) closePredictionModal();
  });
}

function fillGroupFilters() {
  const groups = [...new Set(matches.map((match) => match.group))].sort(compareStages);
  [dom.predictionGroup, dom.resultGroup].forEach((select) => {
    select.innerHTML = `<option value="">Todos os grupos</option>${groups
      .map((group) => `<option value="${group}">${stageLabel({ group })}</option>`)
      .join("")}`;
  });
}

function renderAll() {
  updateHeaderStats();
  renderParticipantOptions();
  renderParticipantsTable();
  renderPredictionMatches();
  renderResultMatches();
  renderDashboard();
  renderHistory();
}

function renderParticipantOptions() {
  if (!state.participants.length) {
    dom.predictionParticipant.innerHTML = `<option value="">Cadastre um participante</option>`;
    dom.participantPickerButton.innerHTML = `<span class="avatar avatar-empty avatar-picker" aria-hidden="true">?</span><span>Cadastre um participante</span>`;
    dom.participantPickerMenu.innerHTML = "";
    return;
  }

  const currentValue = dom.predictionParticipant.value;
  dom.predictionParticipant.innerHTML = state.participants
    .map((participant) => `<option value="${participant.id}">${escapeHtml(participant.name)}</option>`)
    .join("");

  if (state.participants.some((participant) => participant.id === currentValue)) {
    dom.predictionParticipant.value = currentValue;
  }

  renderParticipantPicker();
}

function renderParticipantPicker() {
  const selected = state.participants.find((participant) => participant.id === dom.predictionParticipant.value);
  if (!selected) return;

  dom.participantPickerButton.innerHTML = `
    ${avatarMarkup(selected, "avatar-picker")}
    <span>${escapeHtml(selected.name)}</span>
    <span class="picker-caret" aria-hidden="true">▾</span>
  `;

  dom.participantPickerMenu.innerHTML = state.participants
    .map((participant) => `
      <button
        class="participant-picker-option ${participant.id === selected.id ? "selected" : ""}"
        type="button"
        role="option"
        aria-selected="${participant.id === selected.id}"
        data-participant-id="${participant.id}"
      >
        ${avatarMarkup(participant, "avatar-picker")}
        <span>${escapeHtml(participant.name)}</span>
      </button>
    `)
    .join("");

  dom.participantPickerMenu.querySelectorAll("[data-participant-id]").forEach((button) => {
    button.addEventListener("click", () => {
      dom.predictionParticipant.value = button.dataset.participantId;
      closeParticipantPicker();
      renderPredictionMatches();
    });
  });
}

function toggleParticipantPicker() {
  const isHidden = dom.participantPickerMenu.classList.contains("hidden");
  dom.participantPickerMenu.classList.toggle("hidden", !isHidden);
  dom.participantPickerButton.setAttribute("aria-expanded", String(isHidden));
}

function closeParticipantPicker() {
  dom.participantPickerMenu.classList.add("hidden");
  dom.participantPickerButton.setAttribute("aria-expanded", "false");
}

function renderParticipantsTable() {
  if (!state.participants.length) {
    dom.participantsTable.innerHTML = `<tr><td colspan="5">Nenhum participante cadastrado ainda.</td></tr>`;
    return;
  }

  dom.participantsTable.innerHTML = [...state.participants]
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"))
    .map((participant) => `
      <tr>
        <td><strong>${escapeHtml(participant.name)}</strong></td>
        <td>${formatDate(participant.birthdate)}</td>
        <td>${getAge(participant.birthdate)} anos</td>
        <td><span class="color-swatch" style="--swatch-color: ${escapeHtml(participant.favoriteColor)}"></span></td>
        <td>
          <div class="row-actions">
            <button class="secondary" type="button" data-edit="${participant.id}">Editar</button>
            <button class="secondary" type="button" data-face="${participant.id}">Rosto</button>
            <button class="danger" type="button" data-remove="${participant.id}">Excluir</button>
          </div>
        </td>
      </tr>
    `)
    .join("");

  dom.participantsTable.querySelectorAll("[data-edit]").forEach((button) => {
    button.addEventListener("click", () => editParticipant(button.dataset.edit));
  });

  dom.participantsTable.querySelectorAll("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => removeParticipant(button.dataset.remove));
  });

  dom.participantsTable.querySelectorAll("[data-face]").forEach((button) => {
    button.addEventListener("click", () => openFaceModal(button.dataset.face));
  });
}

function renderPredictionMatches() {
  const participantId = dom.predictionParticipant.value;
  const participant = state.participants.find((item) => item.id === participantId);

  if (!participant) {
    applyPredictionTheme();
    dom.predictionMatches.innerHTML = createEmptyState(
      "Cadastre participantes primeiro",
      "Depois escolha uma pessoa para preencher os palpites da primeira fase."
    );
    return;
  }

  applyPredictionTheme(participant);
  renderParticipantPicker();
  const filtered = filterMatches(dom.predictionSearch.value, dom.predictionGroup.value);

  dom.predictionMatches.innerHTML = filtered
    .map((match) => {
      const prediction = getPrediction(participant.id, match.id);
      const points = calculatePoints(prediction, getResult(match.id), match.id);
      const badge = isCancelled(match.id) ? "cancelado" : `${points} pts`;
      return createMatchCard(match, "prediction", participant.id, prediction, badge);
    })
    .join("");
  scrollListToToday(dom.predictionMatches);

  dom.predictionMatches.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", handlePredictionChange);
    input.addEventListener("change", handlePredictionChange);
  });
}

function renderResultMatches() {
  const filtered = filterMatches(dom.resultSearch.value, dom.resultGroup.value);

  dom.resultMatches.innerHTML = filtered
    .map((match) => createMatchCard(match, "result", "", getResult(match.id), resultLabel(match.id)))
    .join("");
  scrollListToToday(dom.resultMatches);

  dom.resultMatches.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", handleResultChange);
    input.addEventListener("change", handleResultChange);
  });

  dom.resultMatches.querySelectorAll("[data-toggle-cancel]").forEach((button) => {
    button.addEventListener("click", () => toggleCancelledMatch(Number(button.dataset.toggleCancel)));
  });
}

function renderDashboard() {
  const standings = calculateStandings();
  const activeIds = new Set(activeMatches().map((match) => String(match.id)));
  const completedMatches = Object.entries(state.results)
    .filter(([matchId, result]) => activeIds.has(matchId) && isResultComplete(matchId, result))
    .length;
  const predictionCount = Object.values(state.predictions).reduce((sum, byMatch) => {
    return sum + Object.entries(byMatch)
      .filter(([matchId, prediction]) => activeIds.has(matchId) && hasBothScores(prediction))
      .length;
  }, 0);
  const cancelledCount = state.cancelledMatches.length;

  dom.summaryGrid.innerHTML = [
    ["Participantes", state.participants.length],
    ["Resultados", `${completedMatches}/${activeMatches().length}`],
    ["Palpites", predictionCount],
    ["Jogos cancelados", cancelledCount]
  ]
    .map(([label, value]) => `
      <div class="summary-item">
        <strong>${value}</strong>
        <span>${label}</span>
      </div>
    `)
    .join("");

  if (!standings.length) {
    dom.leaderboard.innerHTML = createEmptyState(
      "O ranking aparece aqui",
      "Cadastre participantes, palpites e resultados reais para apurar os pontos."
    );
    return;
  }

  dom.leaderboard.innerHTML = standings
    .map((participant, index) => `
      <div class="leader-card">
        <button class="leader-row" type="button" data-toggle-extract="${participant.id}" aria-expanded="false">
          <div class="rank">${index + 1}</div>
          ${avatarMarkup(participant)}
          <div>
            <div class="leader-name">${escapeHtml(participant.name)}</div>
            <div class="leader-meta">${formatDate(participant.birthdate)} · ${getAge(participant.birthdate)} anos · ${formatCount(participant.exact, "placar exato", "placares exatos")} · ${formatCount(participant.winners, "acerto vencedor/empate", "acertos vencedor/empate")}</div>
          </div>
          <div class="leader-points">${participant.points}</div>
          <div class="chip">${formatCount(participant.outcomes, "acerto", "acertos")}</div>
        </button>
        <div class="points-extract hidden" id="extract-${participant.id}">
          ${extractMarkup(participant.id)}
        </div>
      </div>
    `)
    .join("");

  dom.leaderboard.querySelectorAll("[data-toggle-extract]").forEach((button) => {
    button.addEventListener("click", () => toggleExtract(button));
  });
}

function toggleExtract(button) {
  const extract = document.getElementById(`extract-${button.dataset.toggleExtract}`);
  if (!extract) return;
  const opening = extract.classList.contains("hidden");
  extract.classList.toggle("hidden", !opening);
  button.setAttribute("aria-expanded", String(opening));
}

function renderHistory() {
  if (!dom.historyChart || !dom.historyLegend) return;

  const history = classificationHistory();
  const ctx = dom.historyChart.getContext("2d");
  const width = dom.historyChart.width;
  const height = dom.historyChart.height;
  ctx.clearRect(0, 0, width, height);

  if (!history.days.length || !state.participants.length) {
    ctx.fillStyle = "#66736d";
    ctx.font = "18px Segoe UI, Arial";
    ctx.fillText("Cadastre resultados reais para gerar o histórico.", 32, 56);
    dom.historyLegend.innerHTML = "";
    return;
  }

  const padding = { left: 58, right: 28, top: 42, bottom: 72 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;
  const timeline = historyTimeline(history.days);
  const maxRank = Math.max(1, state.participants.length);
  const rawMaxPoints = Math.max(
    10,
    ...history.days.flatMap((day) => Object.values(history.pointsByDay[day] || {}))
  );
  const maxPoints = pointsAxisMax(rawMaxPoints);
  const axisSteps = historyMode === "points"
    ? pointsAxisSteps(maxPoints)
    : Array.from({ length: maxRank }, (_, index) => index + 1);

  ctx.strokeStyle = "#d9e1dd";
  ctx.lineWidth = 1;
  ctx.fillStyle = "#66736d";
  ctx.font = "13px Segoe UI, Arial";

  for (let rank = 1; rank <= maxRank; rank += 1) {
    const y = padding.top + ((rank - 1) / Math.max(1, maxRank - 1)) * chartH;
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(width - padding.right, y);
    ctx.stroke();
    ctx.fillText(`${rank}º`, 16, y + 4);
  }

  if (historyMode === "points") {
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = "#d9e1dd";
    ctx.lineWidth = 1;
    ctx.fillStyle = "#66736d";
    ctx.font = "13px Segoe UI, Arial";

    axisSteps.forEach((step) => {
      const y = padding.top + ((maxPoints - step) / Math.max(1, maxPoints)) * chartH;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(width - padding.right, y);
      ctx.stroke();
      ctx.fillText(String(step), 16, y + 4);
    });
  }

  drawHistoryDateAxis(ctx, history.days, timeline, padding, chartW, height);

  drawPhaseDivider(ctx, timeline, padding, chartW, chartH);

  state.participants.forEach((participant) => {
    const color = normalizeColor(participant.favoriteColor);
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;
    ctx.beginPath();

    history.days.forEach((day, index) => {
      const value = historyMode === "points"
        ? history.pointsByDay[day][participant.id] || 0
        : history.rankByDay[day][participant.id] || maxRank;
      const x = historyChartX(day, timeline, padding.left, chartW);
      const y = historyMode === "points"
        ? padding.top + ((maxPoints - value) / Math.max(1, maxPoints)) * chartH
        : padding.top + ((value - 1) / Math.max(1, maxRank - 1)) * chartH;
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });

    ctx.stroke();
  });

  dom.historyLegend.innerHTML = state.participants
    .map((participant) => `
      <span class="history-key">
        <i style="--key-color: ${escapeHtml(normalizeColor(participant.favoriteColor))}"></i>
        ${avatarMarkup(participant, "avatar-picker")}
        ${escapeHtml(participant.name)}
      </span>
    `)
    .join("");
}

function classificationHistory() {
  const days = [...new Set(matches
    .filter((match) => !isCancelled(match.id) && isResultComplete(match.id, getResult(match.id)))
    .map((match) => match.date))]
    .sort();
  const rankByDay = {};
  const pointsByDay = {};

  days.forEach((day) => {
    const standings = calculateStandings(day);
    rankByDay[day] = {};
    pointsByDay[day] = {};
    standings.forEach((participant, index) => {
      rankByDay[day][participant.id] = index + 1;
      pointsByDay[day][participant.id] = participant.points;
    });
  });

  return { days, rankByDay, pointsByDay };
}

function historyTimeline(days) {
  const positions = new Map(days.map((day, index) => [day, index]));
  return { days, positions, span: Math.max(1, days.length - 1) };
}

function historyChartX(day, timeline, left, chartWidth) {
  const index = timeline.positions.get(day) ?? 0;
  return left + (index / timeline.span) * chartWidth;
}

function drawHistoryDateAxis(ctx, days, timeline, padding, chartWidth, height) {
  ctx.save();
  ctx.fillStyle = "#66736d";
  ctx.textAlign = "center";
  ctx.font = "12px Segoe UI, Arial";

  days.forEach((day) => {
    const x = historyChartX(day, timeline, padding.left, chartWidth);
    ctx.fillText(day.slice(8, 10), x, height - 42);
  });

  const monthGroups = [];
  days.forEach((day, index) => {
    const monthKey = day.slice(0, 7);
    const current = monthGroups.at(-1);
    if (current?.month === monthKey) {
      current.end = index;
    } else {
      monthGroups.push({ month: monthKey, start: index, end: index });
    }
  });

  ctx.strokeStyle = "#d9e1dd";
  ctx.lineWidth = 1;
  ctx.font = "700 12px Segoe UI, Arial";
  ctx.fillStyle = "#8a6214";
  monthGroups.forEach((group) => {
    const startX = padding.left + (group.start / timeline.span) * chartWidth;
    const endX = padding.left + (group.end / timeline.span) * chartWidth;
    const labelX = (startX + endX) / 2;
    ctx.beginPath();
    ctx.moveTo(startX, height - 31);
    ctx.lineTo(endX, height - 31);
    ctx.stroke();
    ctx.fillText(monthLabel(group.month), labelX, height - 14);
  });

  ctx.restore();
}

function drawPhaseDivider(ctx, timeline, padding, chartWidth, chartHeight) {
  const firstKnockoutIndex = timeline.days.findIndex((day) => day >= KNOCKOUT_START_DATE);
  if (firstKnockoutIndex <= 0) return;

  const previousX = padding.left + ((firstKnockoutIndex - 1) / timeline.span) * chartWidth;
  const firstKnockoutX = padding.left + (firstKnockoutIndex / timeline.span) * chartWidth;
  const x = (previousX + firstKnockoutX) / 2;
  ctx.save();
  ctx.setLineDash([7, 5]);
  ctx.strokeStyle = "#c8911d";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x, padding.top - 8);
  ctx.lineTo(x, padding.top + chartHeight);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = "#8a6214";
  ctx.font = "700 13px Segoe UI, Arial";
  ctx.textAlign = "left";
  ctx.fillText("Fase de grupos", padding.left, 18);
  ctx.textAlign = "right";
  ctx.fillText("Mata-mata", padding.left + chartWidth, 18);
  ctx.restore();
}

function monthLabel(value) {
  const month = Number(value.slice(5, 7));
  const labels = {
    1: "janeiro",
    2: "fevereiro",
    3: "mar\u00e7o",
    4: "abril",
    5: "maio",
    6: "junho",
    7: "julho",
    8: "agosto",
    9: "setembro",
    10: "outubro",
    11: "novembro",
    12: "dezembro"
  };
  return labels[month] || value;
}

function pointsAxisSteps(maxPoints) {
  const step = Math.max(5, Math.ceil(maxPoints / 4 / 5) * 5);
  const top = Math.ceil(maxPoints / step) * step;
  const steps = [];

  for (let value = 0; value <= top; value += step) {
    steps.push(value);
  }

  return steps.reverse();
}

function pointsAxisMax(maxPoints) {
  const step = Math.max(5, Math.ceil(maxPoints / 4 / 5) * 5);
  return Math.ceil(maxPoints / step) * step;
}

function extractMarkup(participantId) {
  const rows = resolvedMatches()
    .filter((match) => !isCancelled(match.id))
    .sort((a, b) => compareMatchesByKickoff(b, a))
    .map((match) => {
      const prediction = getPrediction(participantId, match.id);
      const result = getResult(match.id);
      const points = calculatePoints(prediction, result, match.id);
      return { match, prediction, result, points };
    })
    .filter((row) => row.points > 0);

  if (!rows.length) {
    return `<div class="extract-empty">Nenhum ponto conquistado ainda.</div>`;
  }

  return `
    <div class="extract-table">
      <div class="extract-head">
        <span>Jogo</span>
        <span>Palpite</span>
        <span>Resultado</span>
        <span>Pontos</span>
      </div>
      ${rows.map(({ match, prediction, result, points }) => `
        <div class="extract-row">
          <span>
            <strong>${escapeHtml(match.home)} x ${escapeHtml(match.away)}</strong>
            <small>${formatDate(match.date)} · ${stageLabel(match)}</small>
          </span>
          <span>${scoreText(prediction)}</span>
          <span>${scoreText(result)}</span>
          <strong>${points}</strong>
        </div>
      `).join("")}
    </div>
  `;
}

function scoreText(score) {
  if (!hasBothScores(score)) return "-";
  const penalties = hasPenaltyScores(score) ? ` (pên. ${score.penHome} x ${score.penAway})` : "";
  return `${score.home} x ${score.away}${penalties}`;
}

function teamNameWithFlag(name) {
  return `${flagImageMarkup(name)}<span>${escapeHtml(name)}</span>`;
}

function flagImageMarkup(name) {
  const code = FLAG_CODES[name];
  if (!code) return "";
  return `<img class="team-flag" src="assets/flags/${code.toLowerCase()}.png" alt="Bandeira de ${escapeHtml(name)}">`;
}

function avatarMarkup(participant, extraClass = "") {
  if (!participant.face) {
    return `<span class="avatar avatar-empty ${extraClass}" aria-hidden="true">${escapeHtml(initials(participant.name))}</span>`;
  }

  const face = participant.face;
  return `
    <span
      class="avatar ${extraClass}"
      style="--avatar-x: ${face.x}%; --avatar-y: ${face.y}%; --avatar-size: ${face.size}rem;"
      aria-label="Rosto de ${escapeHtml(participant.name)}"
    ></span>
  `;
}

function initials(name) {
  return String(name)
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0] || "")
    .join("")
    .toUpperCase();
}

function openFaceModal(participantId) {
  const participant = state.participants.find((item) => item.id === participantId);
  if (!participant) return;

  dom.faceModal.dataset.participantId = participantId;
  dom.faceModalTitle.textContent = `Escolha o rosto de ${participant.name}`;
  renderFaceSelection(participant.face);
  dom.faceModal.classList.remove("hidden");
}

function renderFaceSelection(face) {
  dom.faceHotspots.innerHTML = face ? `
    <div
      class="face-selection-ring"
      style="left: ${face.x}%; top: ${face.y}%; --ring-size: ${face.size}%;"
      aria-hidden="true"
    ></div>
    <div class="face-selection-ring face-preview hidden" aria-hidden="true"></div>
  ` : "";

  if (!face) {
    dom.faceHotspots.innerHTML = `<div class="face-selection-ring face-preview hidden" aria-hidden="true"></div>`;
  }
}

async function selectFacePoint(event) {
  const participant = state.participants.find((item) => item.id === dom.faceModal.dataset.participantId);
  if (!participant) return;

  const point = facePointFromEvent(event);

  participant.face = {
    x: Number(point.x.toFixed(2)),
    y: Number(point.y.toFixed(2)),
    size: DEFAULT_FACE_SIZE
  };

  renderFaceSelection(participant.face);
  state = await saveState();
  renderAll();
}

function moveFacePreview(event) {
  const preview = dom.faceHotspots.querySelector(".face-preview");
  if (!preview) return;

  const point = facePointFromEvent(event);
  preview.style.left = `${point.x}%`;
  preview.style.top = `${point.y}%`;
  preview.style.setProperty("--ring-size", `${DEFAULT_FACE_SIZE}%`);
  preview.classList.remove("hidden");
}

function hideFacePreview() {
  dom.faceHotspots.querySelector(".face-preview")?.classList.add("hidden");
}

function facePointFromEvent(event) {
  const rect = dom.familyPhoto.getBoundingClientRect();
  return {
    x: clamp(((event.clientX - rect.left) / rect.width) * 100, 0, 100),
    y: clamp(((event.clientY - rect.top) / rect.height) * 100, 0, 100)
  };
}

function closeFaceModal() {
  dom.faceModal.classList.add("hidden");
  dom.faceModal.dataset.participantId = "";
}

function openPredictionModal(matchId) {
  const match = getMatch(matchId);
  if (!match) return;
  const result = getResult(matchId);
  const hasOfficialResult = isResultComplete(matchId, result);

  dom.predictionModalTitle.innerHTML = `${teamNameWithFlag(match.home)} <span class="vs">x</span> ${teamNameWithFlag(match.away)}`;
  dom.predictionModalSubtitle.textContent = `${formatDate(match.date)} · ${stageLabel(match)} · ${match.stadium}`;
  dom.predictionModalList.innerHTML = state.participants
    .map((participant) => {
      const prediction = getPrediction(participant.id, matchId);
      const points = calculatePoints(prediction, result, match.id);
      const pointsMarkup = hasOfficialResult
        ? `<span class="prediction-points">${points} pts</span>`
        : "";
      return `
        <div class="prediction-row">
          ${avatarMarkup(participant, "avatar-picker")}
          <div class="prediction-details">
            <strong>${escapeHtml(participant.name)}</strong>
            <span>${scoreText(prediction)}</span>
          </div>
          ${pointsMarkup}
        </div>
      `;
    })
    .join("");
  dom.predictionModal.classList.remove("hidden");
}

function closePredictionModal() {
  dom.predictionModal.classList.add("hidden");
}

function createMatchCard(match, mode, participantId, score, badge) {
  const prefix = mode === "prediction" ? `pred-${participantId}-${match.id}` : `res-${match.id}`;
  const sourceAttrs = mode === "prediction"
    ? `data-participant-id="${participantId}" data-match-id="${match.id}"`
    : `data-match-id="${match.id}"`;
  const cancelled = isCancelled(match.id);
  const disabledAttr = cancelled ? "disabled" : "";
  const cardClass = cancelled ? "match-card is-cancelled" : "match-card";
  const cancelButton = mode === "result"
    ? `<button class="${cancelled ? "secondary" : "danger"} match-admin" type="button" data-toggle-cancel="${match.id}">${cancelled ? "Reativar jogo" : "Cancelar jogo"}</button>`
    : "";
  const statusText = cancelled
    ? "Jogo cancelado por Rodrigo"
    : mode === "prediction"
      ? "Palpite"
      : "Resultado real";
  const predictionInfo = mode === "result" ? resultPredictionInfo(match.id) : "";
  const dateLabel = relativeDayLabel(match.date);
  const dateBadge = dateLabel ? `<span class="date-alert">${dateLabel}</span>` : "";
  const penaltyMarkup = penaltyFieldsMarkup(match, mode, prefix, sourceAttrs, score, disabledAttr);

  return `
    <article class="${cardClass}" data-match-date="${match.date}">
      <div class="match-info">
        <div class="match-topline">
          <span class="chip">${stageLabel(match)}</span>
          <span class="match-status">${statusText}</span>
          ${predictionInfo}
        </div>
        <div class="match-title">
          <span>${teamNameWithFlag(match.home)}</span>
          <span class="vs">x</span>
          <span>${teamNameWithFlag(match.away)}</span>
        </div>
        <div class="match-meta match-date">${formatDate(match.date)} ${dateBadge} · ${match.time}</div>
        <div class="match-meta">${escapeHtml(match.stadium)}</div>
      </div>
      <div class="match-entry">
        <div class="match-score-area">
          <div class="score-form">
            <label class="score-box" for="${prefix}-home">
              <span class="team-name">${teamNameWithFlag(match.home)}</span>
              <input ${sourceAttrs} data-side="home" id="${prefix}-home" type="number" min="0" max="30" inputmode="numeric" value="${score.home ?? ""}" aria-label="${match.home}" ${disabledAttr}>
            </label>
            <span class="dash">x</span>
            <label class="score-box" for="${prefix}-away">
              <span class="team-name">${teamNameWithFlag(match.away)}</span>
              <input ${sourceAttrs} data-side="away" id="${prefix}-away" type="number" min="0" max="30" inputmode="numeric" value="${score.away ?? ""}" aria-label="${match.away}" ${disabledAttr}>
            </label>
          </div>
          ${penaltyMarkup}
        </div>
        <div class="match-actions">
          <span class="points-badge">${badge}</span>
          ${cancelButton}
        </div>
      </div>
    </article>
  `;
}

function penaltyFieldsMarkup(match, mode, prefix, sourceAttrs, score, disabledAttr) {
  if (mode !== "result" || match.phase !== "knockout") return "";

  const tied = hasBothScores(score) && score.home === score.away;
  const hiddenClass = tied ? "" : " hidden";
  const disabled = tied ? disabledAttr : "disabled";

  return `
    <div class="penalty-form${hiddenClass}" data-penalty-row>
      <span class="penalty-label">Pênaltis</span>
      <input ${sourceAttrs} data-side="penHome" id="${prefix}-pen-home" type="number" min="0" max="30" inputmode="numeric" value="${score.penHome ?? ""}" aria-label="Pênaltis ${match.home}" ${disabled}>
      <span class="dash">x</span>
      <input ${sourceAttrs} data-side="penAway" id="${prefix}-pen-away" type="number" min="0" max="30" inputmode="numeric" value="${score.penAway ?? ""}" aria-label="Pênaltis ${match.away}" ${disabled}>
    </div>
  `;
}

async function handlePredictionChange(event) {
  const input = event.target;
  const participantId = input.dataset.participantId;
  const matchId = input.dataset.matchId;
  if (isCancelled(matchId)) return;
  const siblingSide = input.dataset.side === "home" ? "away" : "home";
  const card = input.closest(".match-card");
  const sibling = card.querySelector(`[data-side="${siblingSide}"]`);
  const home = input.dataset.side === "home" ? parseScore(input.value) : parseScore(sibling.value);
  const away = input.dataset.side === "away" ? parseScore(input.value) : parseScore(sibling.value);

  setNestedScore(state.predictions, participantId, matchId, home, away);
  await saveState();
  updatePredictionBadge(card, participantId, matchId);
  renderDashboard();
}

async function handleResultChange(event) {
  const input = event.target;
  const matchId = input.dataset.matchId;
  if (isCancelled(matchId)) return;
  const previousResult = { ...getResult(matchId) };
  const previousComplete = isResultComplete(matchId, previousResult);
  const previousWinner = previousComplete ? matchWinnerSide(previousResult) : "";
  const card = input.closest(".match-card");
  const home = parseScore(card.querySelector('[data-side="home"]')?.value ?? "");
  const away = parseScore(card.querySelector('[data-side="away"]')?.value ?? "");
  const penHomeInput = card.querySelector('[data-side="penHome"]');
  const penAwayInput = card.querySelector('[data-side="penAway"]');
  const penaltiesEnabled = hasBothScores({ home, away }) && home === away && getMatch(matchId)?.phase === "knockout";
  const penHome = penaltiesEnabled ? parseScore(penHomeInput?.value ?? "") : null;
  const penAway = penaltiesEnabled ? parseScore(penAwayInput?.value ?? "") : null;

  updatePenaltyFields(card, penaltiesEnabled);
  setScore(state.results, matchId, home, away, penHome, penAway);
  await saveState();
  const currentResult = getResult(matchId);
  const currentComplete = isResultComplete(matchId, currentResult);
  const currentWinner = currentComplete ? matchWinnerSide(currentResult) : "";
  const bracketChanged = previousComplete !== currentComplete || previousWinner !== currentWinner;

  if (bracketChanged) {
    renderPredictionMatches();
    renderResultMatches();
  } else {
    updateResultBadge(card, matchId);
  }
  updateHeaderStats();
  renderDashboard();
  renderHistory();
}

function updatePenaltyFields(card, enabled) {
  const row = card.querySelector("[data-penalty-row]");
  if (!row) return;
  row.classList.toggle("hidden", !enabled);
  row.querySelectorAll("input").forEach((input) => {
    input.disabled = !enabled;
    if (!enabled) input.value = "";
  });
}

function updatePredictionBadge(card, participantId, matchId) {
  const badge = card.querySelector(".points-badge");
  if (!badge) return;
  const points = calculatePoints(getPrediction(participantId, matchId), getResult(matchId), matchId);
  badge.textContent = `${points} pts`;
}

function updateResultBadge(card, matchId) {
  const badge = card.querySelector(".points-badge");
  if (!badge) return;
  badge.textContent = resultLabel(matchId);
}

async function toggleCancelledMatch(matchId) {
  const key = String(matchId);
  if (isCancelled(matchId)) {
    state.cancelledMatches = state.cancelledMatches.filter((item) => item !== key);
  } else {
    const predictionCount = countPredictionsForMatch(key);
    if (predictionCount > 0) {
      const message = predictionCount === 1
        ? "Esse jogo já tem 1 palpite preenchido. Se cancelar, esse palpite será apagado. Confirmar cancelamento?"
        : `Esse jogo já tem ${predictionCount} palpites preenchidos. Se cancelar, esses palpites serão apagados. Confirmar cancelamento?`;

      if (!confirm(message)) return;
      deletePredictionsForMatch(key);
    }

    state.cancelledMatches.push(key);
  }

  await saveState();
  renderAll();
}

function countPredictionsForMatch(matchId) {
  return Object.values(state.predictions)
    .filter((byMatch) => hasBothScores(byMatch?.[matchId]))
    .length;
}

function resultPredictionInfo(matchId) {
  const key = String(matchId);
  const completed = countPredictionsForMatch(key);
  if (isCancelled(key)) {
    return `<span class="prediction-count">Palpites: ${completed}/${state.participants.length}</span>`;
  }

  const missing = state.participants
    .filter((participant) => !hasBothScores(getPrediction(participant.id, key)))
    .map((participant) => participant.name);
  const missingText = missing.length
    ? `<span class="prediction-missing">Falta: ${escapeHtml(missing.join(", "))}</span>`
    : `<button class="prediction-complete prediction-complete-button" type="button" data-show-predictions="${key}">Todos preencheram</button>`;

  return `
    <span class="prediction-count">Palpites: ${completed}/${state.participants.length}</span>
    ${missingText}
  `;
}

function updateHeaderStats() {
  const active = activeMatches();
  const activeIds = new Set(active.map((match) => String(match.id)));
  const completed = Object.entries(state.results)
    .filter(([matchId, result]) => activeIds.has(matchId) && isResultComplete(matchId, result))
    .length;
  const percentage = active.length ? Math.round((completed / active.length) * 100) : 0;

  dom.matchCount.textContent = `${completed} de ${active.length}`;
  dom.matchProgress.textContent = `${percentage}% dos jogos`;
}

function deletePredictionsForMatch(matchId) {
  Object.keys(state.predictions).forEach((participantId) => {
    delete state.predictions[participantId][matchId];
    if (!Object.keys(state.predictions[participantId]).length) {
      delete state.predictions[participantId];
    }
  });
}

function editParticipant(id) {
  const participant = state.participants.find((item) => item.id === id);
  if (!participant) return;

  dom.participantId.value = participant.id;
  dom.participantName.value = participant.name;
  dom.participantBirthdate.value = participant.birthdate;
  dom.participantColor.value = normalizeColor(participant.favoriteColor);
  dom.participantSubmit.textContent = "Salvar";
  dom.cancelEdit.classList.remove("hidden");
  dom.participantName.focus();
}

async function removeParticipant(id) {
  const participant = state.participants.find((item) => item.id === id);
  if (!participant || !confirm(`Excluir ${participant.name} do bolão?`)) return;

  state.participants = state.participants.filter((item) => item.id !== id);
  delete state.predictions[id];
  state = await saveState();
  resetParticipantForm();
  renderAll();
}

function resetParticipantForm() {
  dom.participantId.value = "";
  dom.participantName.value = "";
  dom.participantBirthdate.value = "";
  dom.participantColor.value = "#12694f";
  dom.participantSubmit.textContent = "Adicionar";
  dom.cancelEdit.classList.add("hidden");
}

function filterMatches(search, group) {
  const query = normalize(search);
  return resolvedMatches()
    .filter((match) => {
      const haystack = normalize(`${match.group} ${match.home} ${match.away} ${match.stadium}`);
      const matchesSearch = !query || haystack.includes(query);
      const matchesGroup = !group || match.group === group;
      return matchesSearch && matchesGroup;
    })
    .sort(compareMatchesByKickoff);
}

function calculateStandings(untilDate = null) {
  return state.participants
    .map((participant) => {
      let points = 0;
      let exact = 0;
      let outcomes = 0;
      let winners = 0;

      matches.forEach((match) => {
        if (isCancelled(match.id)) return;
        if (untilDate && match.date > untilDate) return;
        const prediction = getPrediction(participant.id, match.id);
        const result = getResult(match.id);
        const scoreDetails = calculatePointDetails(prediction, result, match.id);
        const score = scoreDetails.points;
        points += score;
        if (scoreDetails.kind === "exact") exact += 1;
        if (score > 0) {
          outcomes += 1;
          if (scoreDetails.kind === "outcome" || scoreDetails.kind === "penalty") winners += 1;
        }
      });

      return { ...participant, points, exact, outcomes, winners };
    })
    .sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      return new Date(b.birthdate).getTime() - new Date(a.birthdate).getTime();
    });
}

function calculatePoints(prediction, result, matchId) {
  return calculatePointDetails(prediction, result, matchId).points;
}

function calculatePointDetails(prediction, result, matchId) {
  if (!hasBothScores(prediction) || !hasBothScores(result)) {
    return { points: 0, kind: "" };
  }

  const match = getMatch(matchId);
  const knockout = match?.phase === "knockout";
  if (knockout && result.home === result.away && !hasPenaltyScores(result)) {
    return { points: 0, kind: "" };
  }

  if (prediction.home === result.home && prediction.away === result.away) {
    return { points: knockout ? 20 : 10, kind: "exact" };
  }

  if (outcome(prediction) === outcome(result)) {
    return { points: knockout ? 10 : 5, kind: "outcome" };
  }

  if (knockout && outcome(result) === "draw" && hasPenaltyScores(result)) {
    const predictedWinner = outcome(prediction);
    if (predictedWinner !== "draw" && predictedWinner === penaltyWinner(result)) {
      return { points: 8, kind: "penalty" };
    }
  }

  return { points: 0, kind: "" };
}

function outcome(score) {
  if (score.home > score.away) return "home";
  if (score.home < score.away) return "away";
  return "draw";
}

function hasPenaltyScores(score) {
  return Number.isInteger(score?.penHome) && Number.isInteger(score?.penAway) && score.penHome !== score.penAway;
}

function penaltyWinner(score) {
  if (!hasPenaltyScores(score)) return "";
  return score.penHome > score.penAway ? "home" : "away";
}

function resultLabel(matchId) {
  if (isCancelled(matchId)) return "cancelado";
  const result = getResult(matchId);
  return isResultComplete(matchId, result) ? "registrado" : "pendente";
}

function activeMatches() {
  return resolvedMatches().filter((match) => !isCancelled(match.id));
}

function isCancelled(matchId) {
  return state.cancelledMatches.includes(String(matchId));
}

function getMatch(matchId) {
  const match = matches.find((item) => String(item.id) === String(matchId));
  return match ? resolveMatch(match) : undefined;
}

function resolvedMatches() {
  return matches.map((match) => resolveMatch(match));
}

function resolveMatch(match, seen = new Set()) {
  return {
    ...match,
    home: resolveTeamSlot(match.home, seen),
    away: resolveTeamSlot(match.away, seen)
  };
}

function resolveTeamSlot(slot, seen = new Set()) {
  const dependency = parseKnockoutDependency(slot);
  if (!dependency || seen.has(dependency.matchId)) return slot;

  const sourceMatch = matches.find((match) => String(match.id) === dependency.matchId);
  if (!sourceMatch) return slot;

  const result = getResult(dependency.matchId);
  if (!isResultComplete(dependency.matchId, result)) return slot;

  const winnerSide = matchWinnerSide(result);
  if (!winnerSide) return slot;

  const nextSeen = new Set(seen);
  nextSeen.add(dependency.matchId);
  const resolvedSource = resolveMatch(sourceMatch, nextSeen);

  if (dependency.type === "winner") {
    return winnerSide === "home" ? resolvedSource.home : resolvedSource.away;
  }

  return winnerSide === "home" ? resolvedSource.away : resolvedSource.home;
}

function parseKnockoutDependency(slot) {
  const match = String(slot).match(/^(Vencedor|Perdedor) Jogo (\d+)$/);
  if (!match) return null;
  return {
    type: match[1] === "Vencedor" ? "winner" : "loser",
    matchId: match[2]
  };
}

function matchWinnerSide(result) {
  if (!hasBothScores(result)) return "";
  if (result.home > result.away) return "home";
  if (result.away > result.home) return "away";
  return penaltyWinner(result);
}

function getPrediction(participantId, matchId) {
  return state.predictions[participantId]?.[matchId] ?? {};
}

function getResult(matchId) {
  return state.results[matchId] ?? {};
}

function setNestedScore(collection, participantId, matchId, home, away) {
  if (!collection[participantId]) collection[participantId] = {};
  setScore(collection[participantId], matchId, home, away);
}

function setScore(collection, matchId, home, away, penHome = null, penAway = null) {
  if (home === null && away === null) {
    delete collection[matchId];
    return;
  }

  collection[matchId] = { home, away };
  if (Number.isInteger(penHome) && Number.isInteger(penAway)) {
    collection[matchId].penHome = penHome;
    collection[matchId].penAway = penAway;
  }
}

function parseScore(value) {
  if (value === "") return null;
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed >= 0 ? parsed : null;
}

function hasBothScores(score) {
  return Number.isInteger(score?.home) && Number.isInteger(score?.away);
}

function isResultComplete(matchId, result) {
  if (!hasBothScores(result)) return false;
  const match = getMatch(matchId);
  if (match?.phase === "knockout" && result.home === result.away) {
    return hasPenaltyScores(result);
  }
  return true;
}

function applyPredictionTheme(participant) {
  const view = document.getElementById("predictions");
  if (!view) return;
  const predictionsActive = view.classList.contains("active");

  if (!participant) {
    resetPredictionTheme();
    return;
  }

  const color = normalizeColor(participant.favoriteColor);
  view.style.setProperty("--participant-color", color);
  view.style.setProperty("--participant-contrast", contrastColor(color));
  view.classList.add("participant-themed");

  if (predictionsActive) {
    document.body.style.setProperty("--participant-color", color);
    document.body.style.setProperty("--participant-contrast", contrastColor(color));
    document.body.classList.add("prediction-theme");
  } else {
    resetPredictionTheme(false);
  }
}

function resetPredictionTheme(clearView = true) {
  const view = document.getElementById("predictions");
  if (clearView && view) {
    view.style.removeProperty("--participant-color");
    view.style.removeProperty("--participant-contrast");
    view.classList.remove("participant-themed");
  }

  document.body.style.removeProperty("--participant-color");
  document.body.style.removeProperty("--participant-contrast");
  document.body.classList.remove("prediction-theme");
}

async function loadState() {
  try {
    sqliteAvailable = true;
    return normalizeState(await requestJson("/api/state"));
  } catch {
    alert("Não foi possível carregar o SQLite. Abra o app pelo server.py em http://localhost:5173.");
    sqliteAvailable = false;
    return loadLocalState();
  }
}

function loadLocalState() {
  try {
    return normalizeState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "{}"));
  } catch {
    return normalizeState({});
  }
}

function normalizeState(value) {
  return {
    participants: Array.isArray(value?.participants)
      ? value.participants.map((participant) => ({
          ...participant,
          favoriteColor: normalizeColor(participant.favoriteColor),
          face: normalizeFace(participant.face)
        }))
      : [],
    predictions: value?.predictions && typeof value.predictions === "object" ? value.predictions : {},
    results: value?.results && typeof value.results === "object" ? value.results : {},
    cancelledMatches: Array.isArray(value?.cancelledMatches) ? value.cancelledMatches.map(String) : []
  };
}

function normalizeColor(value) {
  return /^#[0-9a-f]{6}$/i.test(String(value)) ? String(value).toLowerCase() : "#12694f";
}

function normalizeFace(value) {
  if (!value || typeof value !== "object") return null;
  const x = Number(value.x);
  const y = Number(value.y);
  const size = Number(value.size || DEFAULT_FACE_SIZE);

  if (!Number.isFinite(x) || !Number.isFinite(y)) return null;

  return {
    x: Number(clamp(x, 0, 100).toFixed(2)),
    y: Number(clamp(y, 0, 100).toFixed(2)),
    size: Number(clamp(size, 8, 28).toFixed(2))
  };
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function contrastColor(hex) {
  const value = normalizeColor(hex).slice(1);
  const red = parseInt(value.slice(0, 2), 16);
  const green = parseInt(value.slice(2, 4), 16);
  const blue = parseInt(value.slice(4, 6), 16);
  const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
  return brightness > 150 ? "#17201c" : "#ffffff";
}

async function saveState() {
  if (!sqliteAvailable) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
    return normalizeState(state);
  }

  try {
    return normalizeState(await requestJson("/api/state", {
      method: "POST",
      body: state
    }));
  } catch {
    alert("Não foi possível salvar no SQLite.");
    sqliteAvailable = false;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
    return normalizeState(state);
  }
}

function requestJson(url, options = {}) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(options.method || "GET", url);
    xhr.setRequestHeader("Accept", "application/json");
    if (options.body !== undefined) {
      xhr.setRequestHeader("Content-Type", "application/json");
    }

    xhr.onload = () => {
      if (xhr.status < 200 || xhr.status >= 300) {
        reject(new Error(`HTTP ${xhr.status}`));
        return;
      }

      try {
        resolve(JSON.parse(xhr.responseText || "{}"));
      } catch (error) {
        reject(error);
      }
    };

    xhr.onerror = () => reject(new Error("Erro de rede"));
    xhr.send(options.body !== undefined ? JSON.stringify(options.body) : undefined);
  });
}

function formatDate(value) {
  const [year, month, day] = value.split("-");
  return `${day}/${month}/${year}`;
}

function formatCount(value, singular, plural) {
  return `${value} ${value === 1 ? singular : plural}`;
}

function stageLabel(match) {
  const knockoutLabels = {
    "16 avos": "2\u00aa fase - 16avos",
    Oitavas: "2\u00aa fase - Oitavas",
    Quartas: "2\u00aa fase - Quartas",
    Semis: "2\u00aa fase - Semi",
    "Disputa 3\u00ba": "2\u00aa fase - Disputa 3\u00ba",
    Final: "2\u00aa fase - Final"
  };

  return knockoutLabels[match.group] || `1\u00aa fase - grupo ${match.group}`;
}

function compareStages(a, b) {
  return stageOrder(a) - stageOrder(b);
}

function stageOrder(group) {
  const knockoutOrder = {
    "16 avos": 100,
    Oitavas: 101,
    Quartas: 102,
    Semis: 103,
    "Disputa 3\u00ba": 104,
    Final: 105
  };

  if (knockoutOrder[group] !== undefined) return knockoutOrder[group];
  return group.charCodeAt(0) - 64;
}

function compareMatchesByKickoff(a, b) {
  return matchKickoffValue(a) - matchKickoffValue(b) || a.id - b.id;
}

function matchKickoffValue(match) {
  const [year, month, day] = match.date.split("-").map(Number);
  const [hour, minute] = match.time.split(" ")[0].split(":").map(Number);
  return new Date(year, month - 1, day, hour, minute).getTime();
}

function relativeDayLabel(value) {
  const current = startOfToday().getTime();
  const [year, month, day] = value.split("-").map(Number);
  const matchDay = new Date(year, month - 1, day).getTime();
  const dayMs = 24 * 60 * 60 * 1000;

  if (matchDay === current) return "hoje";
  if (matchDay === current + dayMs) return "amanh\u00e3";
  return "";
}

function todayKey() {
  const today = startOfToday();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function startOfToday() {
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), today.getDate());
}

function scrollListToToday(list) {
  const firstCard = list.querySelector("[data-match-date]");
  const targetCard = nextUpcomingCard(list);
  list.scrollTop = targetCard && firstCard ? targetCard.offsetTop - firstCard.offsetTop : 0;
}

function nextUpcomingCard(list) {
  const today = todayKey();
  const cards = Array.from(list.querySelectorAll("[data-match-date]"));
  return cards.find((card) => card.dataset.matchDate >= today) || null;
}

function getAge(birthdate) {
  const today = new Date();
  const birth = new Date(`${birthdate}T00:00:00`);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDelta = today.getMonth() - birth.getMonth();
  if (monthDelta < 0 || (monthDelta === 0 && today.getDate() < birth.getDate())) age -= 1;
  return age;
}

function normalize(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function createEmptyState(title, text) {
  const template = dom.emptyStateTemplate.content.cloneNode(true);
  template.querySelector("strong").textContent = title;
  template.querySelector("p").textContent = text;
  const wrapper = document.createElement("div");
  wrapper.appendChild(template);
  return wrapper.innerHTML;
}

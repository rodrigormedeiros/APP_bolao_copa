# Bolao da familia Medeiros

App familiar para palpites da Copa do Mundo 2026.

## Rodar no notebook servidor

Execute:

```powershell
python server.py
```

Depois abra:

```text
http://localhost:5173/
```

Nesse modo os dados ficam no SQLite local.

## Abrir pelo GitHub Pages

O GitHub Pages serve apenas arquivos estaticos. Nesse modo, o app usa o armazenamento do proprio navegador (`localStorage`).

Isso significa:

- cada celular ou navegador tera uma copia propria dos dados;
- para sincronizar, use os botoes `Exportar dados` e `Importar dados`;
- para todos verem os mesmos dados em tempo real, use o notebook servidor com `server.py`.


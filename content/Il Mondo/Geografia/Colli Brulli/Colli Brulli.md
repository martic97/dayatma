---
type: luogo
tipo:
  - regione
stato:
  - non visitato
luogo_superiore: Dayatma
---
> [!info] Informazioni rapide
>
> **Tipo:** `= this.tipo`
>
> **Stato:** `= this.stato`

---
# Descrizione

A sud della Foresta di Arvandor, non hanno niente di speciale, se non il fatto di essere poco adatte all’agricoltura.

---
# 🗺 Mappa

> Inserisci qui la mappa del luogo oppure una mappa Leaflet.

---
# Collegamenti

## 👥 NPC presenti

```dataview
TABLE ruolo AS "Ruolo"
FROM "02 - Ambientazione/NPC"
WHERE contains(luogo, this.file.link)
SORT file.name
```

## 📜 Missioni

```dataview
TABLE stato AS "Stato"
FROM "03 - Campagna/Missioni"
WHERE contains(luoghi, this.file.link)
SORT file.name
```

## 📅 Sessioni

```dataview
TABLE data AS "Data"
FROM "03 - Campagna/Sessioni"
WHERE contains(luoghi, this.file.link)
SORT data DESC
```

## 🎒 Oggetti trovati

```dataview
LIST
FROM "02 - Ambientazione/Oggetti"
WHERE contains(luogo, this.file.link)
```

## 📍 Luoghi della regione
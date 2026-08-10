---
type: luogo
tipo:
  - isola
stato:
  - non visitata
luogo_superiore: "[[Il Mondo/Geografia/Mare dei Giganti Meridionale/Isole Tridente]]"
---
> [!info] Informazioni rapide
>
> **Tipo:** `= this.tipo`
>
> **Arcipelago:** `= this.luogo_superiore`
>
> **Stato:** `= this.stato`

---
# Descrizione

Punto di passaggio di alcune tratte commerciali.

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

## 📍 Luoghi dell'isola
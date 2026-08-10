---
type: luogo
tipo:
  - arcipelago
stato:
  - non visitata
luogo_superiore: "[[Il Mondo/Geografia/Mare dei Giganti Meridionale]]"
---
> [!info] Informazioni rapide
>
> **Tipo:** `= this.tipo`
>
> **Regione:** `= this.luogo_superiore`
>
> **Stato:** `= this.stato`

---
# Descrizione

Trio di isole che rappresentano ognuna uno dei rebbi del Tridente da cui prende il nome l’arcipelago. La tratta dal [[Il Mondo/Geografia/Mare dei Giganti Meridionale/Isole Tridente/Primo Rebbio/Primo Rebbio|Primo]] al [[Il Mondo/Geografia/Mare dei Giganti Meridionale/Isole Tridente/Terzo Rebbio/Terzo Rebbio|Terzo Rebbio]] è regolamentata.

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
---
type: luogo
tipo:
  - città
  - porto
stato:
  - visitato
luogo_superiore: "[[Il Mondo/Geografia/Piana di Vlenna]]"
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

Importante città portuale, affacciata sul [[Il Mondo/Geografia/Mare del Drago Balena/Mare del Drago Balena|Mare del Drago Balena]]. Famosa per essere l’unica città ad occuparsi della tratta per [[Il Mondo/Geografia/Mare del Drago Balena/Liminaria/Liminaria|Liminaria]], seppur su autorizzazione della [[Società dei Navigatori]].

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

## 📍 Luoghi della città
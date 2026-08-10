---
type: luogo
tipo:
  - città
stato:
  - non visitato
luogo_superiore: "\n"
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

Bagnata dal [[Il Mondo/Geografia/Vand Minore|Vand Minore]], da cui anche la città prende il nome, sorge vicino alla [[Il Mondo/Geografia/Foresta di Arvandor/Foresta di Arvandor|Foresta di Arvandor]] ed è la città più a nord del continente. Oltre a ciò, non è famosa per nient’altro. Data la distanza, è la città che si sente più affrancata dall’influenza di [[Il Mondo/Geografia/Piana di Vlenna/Vlenna/Vlenna|Vlenna]].

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
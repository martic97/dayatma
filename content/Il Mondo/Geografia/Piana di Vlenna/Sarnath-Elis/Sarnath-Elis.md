---
type: luogo
tipo:
  - città
  - religione
stato:
  - non visitato
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

Grande città del continente ed ex capitale politica. Attualmente ricopre unicamente la funzione religiosa. Il suo nome significa «Città di Sarnath», poiché fondata in onore del [[Sarnath|dio]].

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
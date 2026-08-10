---
type: luogo
tipo:
  - città
  - capitale
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

Una delle maggiori città del continente, è diventata la capitale politica successivamente alla caduta del regime oligarchico precedente. È qui che si trovano [[I Nove]], la massima carica governativa. L’influenza e il controllo di Vlenna non sono le medesime in ogni città, a causa della distanza o della presenza di barriere naturali, come la [[Il Mondo/Geografia/Dorsale Spina/Dorsale Spina|Dorsale Spina]].
Sorge sulla [[Il Mondo/Geografia/Piana di Vlenna/Piana di Vlenna|piana]] da cui prende il nome ed è bagnata dal [[Canale Verde]], costruito per permettere alla città di attingere all’acqua del [[Fiume Smeraldo]].
La maestosa città riproduce nella sua struttura e nella sua organizzazione la collaborazione fra le razze portata dai [[Il Mondo/Fazioni e organizzazioni/I Nove|Nove]]; tranquilla, ordinata, solenne: un luogo che trascende il tempo, più di una capitale, un simbolo di rinascita, un segnale di forza e di autorità.

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
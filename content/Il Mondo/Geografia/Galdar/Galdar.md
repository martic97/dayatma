---
type: luogo
tipo:
  - città
  - porto
  - commercio
stato:
  - visitato
luogo_superiore: Dayatma
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

Città portuale affacciata sul [[Il Mondo/Geografia/Mare dei Giganti Meridionale/Mare dei Giganti Meridionale|Mare dei Giganti Meridionale]], parte di una rotta commerciale che ha inizio a [[Il Mondo/Geografia/Rodomas Nuova/Rodomas Nuova|Rodomas Nuova]] e, passando dall’entroterra, raggiunge [[Il Mondo/Geografia/Piana di Vlenna/Vlenna/Vlenna|Vlenna]]. La città consente la tratta per raggiungere il [[Il Mondo/Geografia/Mare dei Giganti Meridionale/Isole Tridente/Secondo Rebbio/Secondo Rebbio|Secondo]] e il [[Il Mondo/Geografia/Mare dei Giganti Meridionale/Isole Tridente/Terzo Rebbio/Terzo Rebbio|Terzo Rebbio]] delle [[Il Mondo/Geografia/Mare dei Giganti Meridionale/Isole Tridente/Isole Tridente|Isole Tridente]] solo su autorizzazione della [[Il Mondo/Fazioni e organizzazioni/Società dei Navigatori|Società dei Navigatori]].

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
---
type: fazione
tipo:
  - governo
stato:
  - Attiva
atteggiamento:
  - neutro
luogo_base: "[[Il Mondo/Geografia/Piana di Vlenna/Vlenna]]"
leader:
---
![Stemma]({{immagine}})
> [!info] Informazioni rapide
>
> **Tipo:** `= this.tipo`
>
> **Stato:** `= this.stato`
>
> **Atteggiamento:** `= this.atteggiamento`
>
> **Base:** `= this.luogo_base`
>
> **Leader:** `= this.leader`

---

# Descrizione

Il governo principale di Dayatma.

## Storia

Eventi importanti legati alla fazione.

## Organizzazione

Composto da nove governatori e governatrici, ciascuno rappresentante di una delle principali razze del continente. Ogni governatore è accompagnato dalla sua guardia del corpo, che, in segno di fiducia, appartiene una delle altre razze.

---

# Identità

## Ideali

-

## Obiettivi

-

## Metodi

-

---

# Collegamenti

---

## 📜 Missioni collegate

```dataview
TABLE
stato AS "Stato"
FROM "04. Campagna/Missioni"
WHERE contains(fazioni, this.file.link)
SORT file.name
```
---
## 📅 Sessioni

```dataview
TABLE
data AS "Data"
FROM "03 - Campagna/Sessioni"
WHERE contains(fazioni, this.file.link)
SORT data DESC
```
---
# Membri
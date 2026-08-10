---
type: organizzazione
tipo:
  - commercio
stato:
  - Attiva
atteggiamento:
  - neutro
luogo_base: "[[Il Mondo/Geografia/Mare del Silenzio/Marindor]]"
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

Società mercantile che gestisce la maggior parte delle rotte marittime e incaricata dell'esplorazione oltre i confini di Dayatma.

## Storia

Eventi importanti legati alla fazione.

## Organizzazione

Struttura interna, gerarchie, divisioni.

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
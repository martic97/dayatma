---
type: organizzazione
tipo:
  - culto
stato:
  - Attiva
atteggiamento:
  - neutro
luogo_base: "[[Il Mondo/Geografia/Foresta di Arvandor/Nythera]]"
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

Culto diffuso a [[Il Mondo/Geografia/Foresta di Arvandor/Nythera/Nythera|Nythera]], dedito allo studio e al culto del cielo e devote in particolare alle divinità celesti di Dayatma, Helea e la figlia [[Helea]]. È tradizione tra le fate della Volta affidare il destino di ciascun nuovo nato ad una stella, la cui luce, concessa dalla dea, li guiderà nei momenti difficili.

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
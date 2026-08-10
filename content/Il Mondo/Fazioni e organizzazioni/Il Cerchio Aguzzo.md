---
type: organizzazione
tipo:
  - setta
stato:
  - Attiva
atteggiamento:
  - nemico
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

Misteriosa organizzazione sulle tracce del [[Il Mondo/Oggetti/Il Cappio|Cappio]], facendo ricerche a tappeto in tutto il continente; ha sicuramente degli impositori tra le proprie fila e la loro base operativa deve essere [[Il Mondo/Geografia/Piana di Vlenna/Vlenna/Vlenna|Vlenna]].

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
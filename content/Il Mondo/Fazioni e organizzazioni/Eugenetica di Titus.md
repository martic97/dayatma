---
type: organizzazione
tipo:
  - militare
stato:
  - Attiva
atteggiamento:
  - neutro
  - ostile
luogo_base: "[[]]"
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

Organismo paramilitare focalizzato sulla creazione di soldati perfetti. 

## Storia

- **Assumere il volto del Primo**: rituale in cui un soldato estrae lentamente un pugnale, si incide il palmo della mano e disegna delle linee sul viso col sangue, con cui si tinge anche le labbra. Il rituale è una promessa di morte. Il Nome fa riferimento al primo soggetto eugenetico, talmente forte che era stato smembrato.
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
---
type: fazione
nome: I Nove
immagine:
tipo:
  - Governo
stato:
  - Attiva
atteggiamento:
  - Neutrale
luogo_base:
leader:
membri_importanti:
  - 
nemici:
  - 
alleati:
  - 
---
```columns
id: fazione-info
===
![Stemma]({{immagine}})
===
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
```

---

# Descrizione

Il governo principale di Dayatma

---

# Identità

## Ideali

-

## Obiettivi

-

## Metodi

-

---

# Storia

Eventi importanti legati alla fazione.

---

# Organizzazione

Struttura interna, gerarchie, divisioni.

---

# Collegamenti

## 👥 Membri

```dataview
TABLE
ruolo AS "Ruolo",
stato AS "Stato"
FROM "03. Mondo/NPC"
WHERE contains(fazione, this.file.link)
SORT file.name
```

---

## 📍 Luoghi collegati

```dataview
LIST
FROM "003. Mondo/Luoghi"
WHERE contains(fazioni, this.file.link)
```

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

## 🎒 Oggetti collegati

```dataview
LIST
FROM "02 - Ambientazione/Oggetti"
WHERE contains(fazione, this.file.link)
```

---

# Note personali

- 
---
type: missione
nome:
stato:
  - Attiva
origine:
  - 
priorita:
  - 
data_inizio:
data_conclusione:
committente:
personale_di:
fazioni:
  - 
npc:
  - 
luoghi:
  - 
oggetti:
  - 
sessioni:
  - 
ricompensa:
---
> [!info] Stato missione
>
> **Stato:** `= this.stato`
>
> **Origine:** `= this.origine`
>
> **Priorità:** `= this.priorita`
>
> **Inizio:** `= this.data_inizio`

---

# Descrizione

{{descrizione_breve}}

---

# Obiettivi

## Obiettivo principale

- [ ]

## Obiettivi secondari

- [ ]

---

# Stato di avanzamento

## Completati

- [x]

## In corso

- [ ]

## Da fare

- [ ]

---

# Informazioni raccolte

-

---

# Decisioni del gruppo

-

---

# Collegamenti

## 👤 NPC coinvolti

```dataview
LIST
FROM "02 - Ambientazione/NPC"
WHERE contains(file.link, this.npc)
```

---

## 🏛 Fazioni coinvolte

```dataview
LIST
FROM "02 - Ambientazione/Fazioni"
WHERE contains(file.link, this.fazioni)
```

---

## 📍 Luoghi

```dataview
LIST
FROM "02 - Ambientazione/Luoghi"
WHERE contains(file.link, this.luoghi)
```

---

## 🎒 Oggetti

```dataview
LIST
FROM "02 - Ambientazione/Oggetti"
WHERE contains(file.link, this.oggetti)
```

---

## 📅 Sessioni

```dataview
TABLE data AS "Data"
FROM "03 - Campagna/Sessioni"
WHERE contains(missioni, this.file.link)
SORT data DESC
```

---

# Note personali

-
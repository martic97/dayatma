---
type: sessione
numero:
titolo:
data_reale: 2026-07-10T00:00:00.000Z
data_mondo:
durata:
luoghi: "[[Select Note]]"
npc: "[[Select Note]]"
fazioni: "[[Select Note]]"
missioni: "[[Select Note]]"
oggetti: "[[Select Note]]"
personaggi_presenti: ""
---
> [!info] Informazioni rapide
>
> **Data  sessione:** `= this.data_reale`
>
> **Data nel mondo:** `= this.data_mondo`
>
> **Luoghi:** `= this.luoghi`
>
> **Missioni coinvolte:** `= this.missioni`

---

# Riassunto

Scrivi qui gli eventi principali della sessione.

---

# Eventi importanti

## Incontri

- 

## Scoperte

- 

## Decisioni del gruppo

- 

## Conseguenze

- 

---

# PNG incontrati

```dataview
LIST
FROM "02 - Ambientazione/NPC"
WHERE contains(this.npc, file.link)
```

---

# Luoghi visitati

```dataview
LIST
FROM "02 - Ambientazione/Luoghi"
WHERE contains(this.luoghi, file.link)
```

---

# Missioni aggiornate

```dataview
LIST
FROM "03 - Campagna/Missioni"
WHERE contains(this.missioni, file.link)
```

---

# Oggetti ottenuti

```dataview
LIST
FROM "02 - Ambientazione/Oggetti"
WHERE contains(this.oggetti, file.link)
```

---

# Informazioni da ricordare

- 

---

# Questioni aperte

- 

---

# Note personali

- 
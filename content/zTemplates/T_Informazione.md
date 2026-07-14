---
type: informazione
nome:
categoria:
  - 
stato:
  - Confermata
importanza:
  - 
prima_scoperta:
sessioni:
  - 
npc:
  - 
fazioni:
  - 
luoghi:
  - 
oggetti:
  - 
missioni:
  - 
---

> [!info] Informazioni rapide
>
> **Categoria:** `= this.categoria`
>
> **Stato:** `= this.stato`
>
> **Importanza:** `= this.importanza`
>
> **Scoperta in:** `= this.prima_scoperta`

---

# Descrizione

{{descrizione_breve}}

---

# Dettagli

Sviluppo della conoscenza, collegamenti, approfondimenti.

---

# Evoluzione della conoscenza

## Scoperte iniziali

-

## Nuove informazioni

-

## Cambiamenti

-

---

# Teorie del gruppo

- 

---

# Collegamenti

## 👤 NPC collegati

```dataview
LIST
FROM "02 - Ambientazione/NPC"
WHERE contains(conoscenze, this.file.link)
```

---

## 🏛 Fazioni collegate

```dataview
LIST
FROM "02 - Ambientazione/Fazioni"
WHERE contains(conoscenze, this.file.link)
```

---

## 📍 Luoghi collegati

```dataview
LIST
FROM "02 - Ambientazione/Luoghi"
WHERE contains(conoscenze, this.file.link)
```

---

## 📜 Missioni collegate

```dataview
LIST
FROM "03 - Campagna/Missioni"
WHERE contains(conoscenze, this.file.link)
```

---

## 📅 Sessioni in cui compare

```dataview
TABLE data_reale AS "Data"
FROM "03 - Campagna/Sessioni"
WHERE contains(conoscenze, this.file.link)
SORT numero ASC
```

---

# Note personali

-
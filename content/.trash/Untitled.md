---
type: oggetto_narrativo
nome:
immagine:
categoria:
  - 
stato:
  - Posseduto
importanza:
  - 
possessore:
luogo_origine:
luogo_attuale:
creatore:
fazioni:
  - 
npc:
  - 
missioni:
  - 
sessioni:
  - 
---
```columns
id: oggetto-info
===
![Immagine]({{immagine}})
===
> [!info] Informazioni rapide
>
> **Categoria:** `= this.categoria`
>
> **Stato:** `= this.stato`
>
> **Importanza:** `= this.importanza`
>
> **Possessore:** `= this.possessore`
>
> **Luogo attuale:** `= this.luogo_attuale`
```

---

# Descrizione

Misterioso libro mai tradotto prima. Il party ne ha copiato alcune pagine dall’Emporio Arcano di Vlenna per cercare di interpretarle. Fa riferimento a [[Il Divoratore]]

---

# Storia

Origine dell'oggetto e avvenimenti importanti collegati.

---

# Significato

Perché questo oggetto è importante?

Cosa sappiamo del suo ruolo nella storia?

---

# Informazioni conosciute

- 

---

# Misteri aperti

- 

---

# Collegamenti

## 👤 NPC collegati

```dataview
LIST
FROM "02 - Ambientazione/NPC"
WHERE contains(oggetti, this.file.link)
```

---

## 📍 Luoghi collegati

```dataview
LIST
FROM "02 - Ambientazione/Luoghi"
WHERE contains(oggetti, this.file.link)
```

---

## 📜 Missioni collegate

```dataview
LIST
FROM "03 - Campagna/Missioni"
WHERE contains(oggetti, this.file.link)
```

---

## 📅 Sessioni

```dataview
TABLE data_reale AS "Data"
FROM "03 - Campagna/Sessioni"
WHERE contains(oggetti, this.file.link)
SORT numero ASC
```

---

## 🏛 Fazioni

```dataview
LIST
FROM "02 - Ambientazione/Fazioni"
WHERE contains(oggetti, this.file.link)
```

---

# Note personali

-
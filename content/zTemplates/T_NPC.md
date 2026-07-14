---
type: npc
nome:
immagine:
stato:
  - Vivo
rapporto:
  - 
luogo:
fazione:
ruolo:
---
```columns
id: npc-info
===
![Ritratto]({{immagine}})
===
> [!info] Informazioni rapide
>
> **Stato:** `= this.stato`
>
> **Rapporto:** `= this.rapporto`
>
> **Ruolo:** `= this.ruolo`
>
> **Luogo:** `= this.luogo`
>
> **Fazione:** `= this.fazione`
```

---

# Descrizione

{{descrizione_breve}}

---

# Personalità

Aspetto, comportamento, modo di parlare, caratteristiche distintive.

---

# Storia

Elementi importanti del passato del personaggio.

---

# Informazioni conosciute

Cosa sappiamo di questo NPC.

---

# Note

- 

---

# Collegamenti

## 📍 Luoghi

```dataview
LIST
FROM "02 - Ambientazione/Luoghi"
WHERE contains(abitanze, this.file.link)
OR contains(file.link, this.luogo)
```

---

## 🏛 Fazioni

```dataview
LIST
FROM "02 - Ambientazione/Fazioni"
WHERE contains(membri, this.file.link)
```

---

## 📜 Missioni

```dataview
TABLE stato AS "Stato"
FROM "03 - Campagna/Missioni"
WHERE contains(npc, this.file.link)
```

---

## 📅 Sessioni

```dataview
TABLE data AS "Data"
FROM "03 - Campagna/Sessioni"
WHERE contains(npc, this.file.link)
SORT data DESC
```

---

## 🎒 Oggetti collegati

```dataview
LIST
FROM "02 - Ambientazione/Oggetti"
WHERE contains(possessore, this.file.link)
```

---

## 👥 NPC collegati

```dataview
LIST
FROM "02 - Ambientazione/NPC"
WHERE contains(collegamenti, this.file.link)
```
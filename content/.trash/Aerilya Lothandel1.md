---
type: npc
immagine:
stato:
  - Vivo
rapporto:
  - 
luogo: "[[Select Note]]"
fazione: "[[Il Mondo/Fazioni e organizzazioni/I Nove]]"
ruolo: Governatrice
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

Elfa, conosciuta per la sua saggezza e la profonda conoscenza della magia naturale. È amata per il suo impegno nella conservazione del continente e delle sue risorse. Ha dimostrato grande abilità diplomatica nel mediare i conflitti tra le razze.

## Personalità

Aspetto, comportamento, modo di parlare, caratteristiche distintive.

## Storia

Elementi importanti del passato del personaggio.

# Note

- 

---

# Collegamenti

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

## 👥 NPC collegati

```dataview
LIST
FROM "02 - Ambientazione/NPC"
WHERE contains(collegamenti, this.file.link)
```
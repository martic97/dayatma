---
type: npc
immagine:
stato:
  - Vivo
rapporto:
  - 
luogo:
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

{{descrizione_breve}}

## Personalità

Aspetto, comportamento, modo di parlare, caratteristiche distintive.

## Storia

Elementi importanti del passato del personaggio.

# Note

- 

---

# Collegamenti

---

## 📜 Missioni

```dataview
TABLE stato AS "Stato"
FROM "03 - Campagna/Missioni"
WHERE contains(npc, this.file.link)
```
## 📅 Sessioni

```dataview
TABLE data AS "Data"
FROM "03 - Campagna/Sessioni"
WHERE contains(npc, this.file.link)
SORT data DESC
```
## 👥 NPC collegati

```dataview
LIST
FROM "02 - Ambientazione/NPC"
WHERE contains(collegamenti, this.file.link)
```
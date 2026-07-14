---
type: caratteristica
statistiche_collegate:
  - 
abilita_collegate:
  - 
tiri_salvezza_collegati:
  - 
sigla: INT
sticker: emoji//1f4da
---
---
## Descrizione

L'**Intelligenza** rappresenta la capacità di ragionamento, memoria, apprendimento e conoscenza del personaggio. Determina la quantità di informazioni che può apprendere e la sua capacità di utilizzare la magia arcana.

---

# Utilizzi principali

## Statistiche collegate

- **Numero di linguaggi conosciuti**
- **Gradi abilità ottenuti per livello**
- **Prove di abilità basate sull'Intelligenza**
- **Incantesimi del Mago**

---

## Formule principali

### Gradi abilità per livello

L'Intelligenza modifica il numero di gradi abilità ottenuti a ogni livello.
**Gradi abilità = Gradi della classe + Mod. Intelligenza**
*(Il minimo è sempre 1 grado abilità per livello.)*

### Linguaggi conosciuti

Un personaggio conosce i linguaggi indicati dalla propria razza.
Un alto punteggio di Intelligenza permette di apprendere linguaggi aggiuntivi, pari al proprio modificatore.

### CD degli incantesimi del Mago

**CD incantesimo = 10 + livello dell'incantesimo + Mod. Intelligenza**

---

# Abilità collegate

```dataview
LIST
FROM "0. Regolamento/Le Abilità"
WHERE contains(caratteristica, this.sigla)
SORT file.name
---
tipo: regolamento
categoria: equipaggiamento
sticker: emoji//1f6e1-fe0f
---

Le **armature** proteggono il personaggio dagli attacchi aumentando la **Classe Armatura (CA)**.
Le armature più pesanti offrono maggiore protezione, ma possono limitare i movimenti, ridurre la mobilità e interferire con alcune capacità.

---

# Competenza nelle armature

Per utilizzare un'armatura senza penalità è necessario possedere la relativa **competenza**.
Le competenze nelle armature (leggere, medie o pesanti) dipendono principalmente dalla **classe** del personaggio.
Un personaggio che indossa un'**armatura con cui non è competente** subisce le **penalità** previste dal regolamento.

---

# Come leggere un'armatura

Ogni armatura presenta diverse caratteristiche:

| Voce | Descrizione |
|---|---|
| Prezzo | Costo dell'armatura |
| Bonus CA | Protezione fornita alla Classe Armatura |
| Bonus Destrezza massimo | Limite al modificatore di Destrezza applicabile alla CA |
| Penalità armatura | Penalità alle prove di alcune abilità |
| Fallimento incantesimi arcani | Possibilità di fallire incantesimi con componente somatica |
| Peso | Ingombro dell'armatura |

---

# Bonus Destrezza massimo

Le armature limitano la capacità del personaggio di sfruttare la propria agilità.
Se un'armatura possiede un **bonus Destrezza massimo**, il modificatore di Destrezza applicato alla CA non può superare quel valore.
- Esempio: Un personaggio con Destrezza +4 che indossa un'armatura con Bonus Destrezza massimo +2 aggiunge solo +2 alla CA.

---

# Penalità alle abilità

Alcune armature rendono più difficili i movimenti e applicano una penalità alle prove di abilità.

## Abilità influenzate

```dataview
LIST
FROM "0. Regolamento/Le Abilità"
WHERE penalita_armatura = true
SORT file.name
```

---

# Armature e incantesimi

Le armature possono causare **fallimento degli incantesimi arcani** con componente somatica.
La penalità riguarda principalmente:
- [[Mago]]
- [[Stregone]]
- [[Bardo]]
	- può lanciare incantesimi arcani in armatura leggera e/o scudo leggero senza subire il rischio di fallimento degli incantesimi.
Gli incantatori divini normalmente non subiscono questa limitazione.

---

# Indossare un'armatura

| Equipaggiamento  | Tempo necessario |
| ---------------- | ---------------- |
| Scudo            | Azione gratuita  |
| Armatura leggera | Azione standard  |
| Armatura media   | Azione standard  |
| Armatura pesante | Azione completa  |
Se il personaggio viene **aiutato**, il tempo necessario per indossare un'**armatura leggera o media** diventa quello di un'**azione di movimento**
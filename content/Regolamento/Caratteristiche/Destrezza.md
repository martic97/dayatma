---
type: caratteristica
statistiche_collegate:
  - 
abilita_collegate:
  - 
tiri_salvezza_collegati:
  - 
sigla: DES
sticker: emoji//1f938
---
---
## Descrizione

La **Destrezza** rappresenta l'agilità, la coordinazione, i riflessi e la precisione del personaggio. Influenza la capacità di colpire a distanza, evitare gli attacchi e reagire rapidamente ai pericoli.

---

# Utilizzi principali

## Statistiche collegate

- **Tiri per colpire a distanza**
- **Tiri per colpire con incantesimi a distanza**
- **Classe Armatura (CA)**
- **Classe Armatura a contatto**
- **Iniziativa**
- **Tiri salvezza sui Riflessi**
- **Danni con armi accurate**
- **Bonus alle Manovre in Combattimento (DMC)**
- **Prove di abilità basate sulla Destrezza**

---

## Formule principali

### Tiro per colpire a distanza con armi o incantesimi

**TpC = BAB + Mod. Destrezza + Mod. Taglia**

### Classe Armatura

**CA = 10 + Armatura + Scudo + Mod. Destrezza + Mod. Taglia**
La Destrezza rappresenta la capacità di evitare gli attacchi.

### Classe Armatura a contatto

**CA contatto = 10 + Mod. Destrezza + Mod. Taglia**
Non considera:
- Armatura
- Scudo

### Difesa da Manovra in Combattimento

**DMC = 10 + BAB + Mod. Forza + Mod. Destrezza + Mod. Taglia**

---

# Abilità collegate

```dataview
LIST
FROM "0. Regolamento/Le Abilità"
WHERE contains(caratteristica, this.sigla)
SORT file.name
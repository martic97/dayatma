---
name:
xp:
hp_max:
class:
race:
alignment:
age:
deity:
size:
height:
weight:
speed:
languages:
inspiration_points:
hero_points:
hit_die:
---
---
tags:
  - personaggio
tipo: PG
nome:
soprannome:
giocatore:
razza:
classe:
allineamento:
luogo_origine:
affiliazione:
stato: Vivo
immagine:
---

# {{title}}

> [!info] Identità
> **Nome:** {{title}}
> **Soprannome:**
> **Giocatore:**
> **Razza:**
> **Classe:**
> **Allineamento:**
> **Origine:**
> **Affiliazione:**
> **Stato:** Vivo

```meta-bind
INPUT[image:title=Ritratto; bindTarget: immagine]
```

![[{{immagine}}]]

---

# Aspetto

Descrizione fisica del personaggio.

## Tratti distintivi
- 
- 
- 

---

# Personalità

## Carattere

## Ideali

## Legami

## Difetti

---

# Biografia

## Infanzia

## Eventi importanti

## Situazione attuale

---

# Equipaggiamento iconico

- 
- 
- 

---

# Relazioni

| Personaggio | Rapporto |
|-------------|----------|
| [[...]] | |
| [[...]] | |

---

# Cronologia

| Data | Evento |
|------|--------|
| | |

---

# Missioni

```dataview
TABLE stato AS "Stato"
FROM "Missioni"
WHERE contains(personaggi, this.file.link)
SORT file.name
```

---

# Luoghi visitati

- [[...]]

---

# Note

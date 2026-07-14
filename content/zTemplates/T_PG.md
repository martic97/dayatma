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
```dataviewjs
const p = dv.current();

// =============================
// DATI PERSONAGGIO
// =============================

const pe = p.xp ?? 0;
const pf_max = p.pf_max ?? 0;
const dadoVita = p.hit_die ?? "—";
const ispirazione = p.inspiration_points ?? 0;
const puntiEroe = p.hero_points ?? 0;

// =============================
// PROGRESSIONE VELOCE PATHFINDER
// =============================

const livelli = [
0,
1300,
3300,
6000,
10000,
15000,
23000,
35000,
50000,
70000,
95000,
125000,
165000,
210000,
275000,
350000,
450000,
575000,
750000,
1000000
];

let livello = 1;
let min = 0;
let max = livelli[livelli.length - 1];

for (let i = 0; i < livelli.length; i++) {
    if (pe >= livelli[i]) {
        livello = i + 1;
        min = livelli[i];
        max = livelli[i + 1] ?? livelli[i];
    }
}

const percent = Math.round(((pe - min) / (max - min || 1)) * 100);

// =============================
// OUTPUT
// =============================

dv.paragraph(`

<div style="margin-bottom:10px;">

<div style="
font-size:12px;
letter-spacing:.08em;
text-transform:uppercase;
color:var(--text-muted);
">
Livello
</div>

<div style="
font-size:22px;
font-weight:600;
color:var(--text-normal);
margin-top:2px;
">
${livello}
</div>

</div>


<div style="
width:100%;
height:6px;
border:1px solid var(--background-modifier-border);
border-radius:999px;
background:var(--background-secondary);
overflow:hidden;
">

<div style="
height:100%;
width:${percent}%;
background:var(--interactive-accent);
transition:width .3s ease;
">
</div>

</div>

<div style="
margin-top:6px;
margin-bottom:14px;
font-size:12px;
color:var(--text-muted);
">
${percent}% • ${pe.toLocaleString()} / ${max.toLocaleString()} PE
</div>


<div style="
display:grid;
grid-template-columns:repeat(4,1fr);
gap:8px;
">

<div style="
padding:8px 6px;
border:1px solid var(--background-modifier-border);
border-radius:6px;
text-align:center;
">

<div style="
font-size:10px;
text-transform:uppercase;
letter-spacing:.05em;
color:var(--text-muted);
">
PF Totali
</div>

<div style="
font-size:18px;
font-weight:600;
">
${pf_max}
</div>

</div>


<div style="
padding:8px 6px;
border:1px solid var(--background-modifier-border);
border-radius:6px;
text-align:center;
">

<div style="
font-size:10px;
text-transform:uppercase;
letter-spacing:.05em;
color:var(--text-muted);
">
Dado Vita
</div>

<div style="
font-size:18px;
font-weight:600;
">
${dadoVita}
</div>

</div>


<div style="
padding:8px 6px;
border:1px solid var(--background-modifier-border);
border-radius:6px;
text-align:center;
">

<div style="
font-size:10px;
text-transform:uppercase;
letter-spacing:.05em;
color:var(--text-muted);
">
Ispirazione
</div>

<div style="
font-size:18px;
font-weight:600;
">
${ispirazione}
</div>

</div>


<div style="
padding:8px 6px;
border:1px solid var(--background-modifier-border);
border-radius:6px;
text-align:center;
">

<div style="
font-size:10px;
text-transform:uppercase;
letter-spacing:.05em;
color:var(--text-muted);
">
Punti Eroe
</div>

<div style="
font-size:18px;
font-weight:600;
">
${puntiEroe}
</div>

</div>

</div>

`);
```
---
```columns
id: 1meY0hc0vE5ZZ4h4Pc5uc
===
<iframe 
  src="https://martic97.github.io/Notion-Carousel-1/notion_carousel_2.html" 
  width="100%" 
  height="350vh"
  style="border:none;">
</iframe>
===
| Campo        | Valore             |
| ------------ | ------------------ |
| Classe       | `= this.class`     |
| Razza        | `= this.race`      |
| Allineamento | `= this.alignment` |
| Età          | `= this.age`       |
| Divinità     | `= this.deity`     |
| Taglia       | `= this.size`      |
| Altezza      | `= this.height + " m" `   |
| Peso         | `= this.weight + " kg"`    |
| Velocità     | `= this.speed + " m"`     |
| Linguaggi    | `= this.languages` |

```
📊 [[Stats]] | ⚔ [[Combat]] | ✨ [[Spells]] | 🎒 [[Inventory]] | 📝 [[Background]]

---

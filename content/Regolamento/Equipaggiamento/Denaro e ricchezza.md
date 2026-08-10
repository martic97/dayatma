---
sticker: emoji//1f4b0
---
Il denaro rappresenta la ricchezza del personaggio e viene utilizzato per acquistare equipaggiamento, servizi e oggetti.
L'unità di riferimento principale è la **moneta d'oro (mo)**.

## Valore monete

| Moneta | Simbolo | Valore in mo |
|---|---|---:|
| Moneta di rame | mr | 0,01 |
| Moneta d'argento | ma | 0,1 |
| Moneta d'oro | mo | 1 |
| Moneta di platino | mp | 10 |
## Valori rapidi

| Equivalenza | Risultato |
|---|---|
| 10 mr | 1 ma |
| 100 mr | 1 mo |
| 10 ma | 1 mo |
| 10 mo | 1 mp |

---
# Convertitore monete

Inserisci il numero di monete possedute. Il valore totale verrà convertito automaticamente.

## Monete possedute

| Moneta                 |                       Quantità |
| ---------------------- | -----------------------------: |
| Monete di rame (mr)    |    `INPUT[number:monete_rame]` |
| Monete d'argento (ma)  | `INPUT[number:monete_argento]` |
| Monete d'oro (mo)      |     `INPUT[number:monete_oro]` |
| Monete di platino (mp) | `INPUT[number:monete_platino]` |

## Valore totale

```dataviewjs
const p = dv.current();

const mr = p.monete_rame ?? 0;
const ma = p.monete_argento ?? 0;
const mo = p.monete_oro ?? 0;
const mp = p.monete_platino ?? 0;

const totale = (mr / 100) + (ma / 10) + mo + (mp * 10);

dv.paragraph(`**Totale patrimonio:** ${totale.toFixed(2)} mo`);

dv.table(
	["Valuta", "Equivalente"],
	[
		["Monete di rame (mr)", `${Math.round(totale * 100)} mr`],
		["Monete d'argento (ma)", `${Math.round(totale * 10)} ma`],
		["Monete d'oro (mo)", `${totale.toFixed(2)} mo`],
		["Monete di platino (mp)", `${(totale / 10).toFixed(2)} mp`]
	]
);
```

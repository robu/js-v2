# Uppgift - Bank

I den här första uppgiften ska du skapa script som löser ett problem. Du jobbar i mappen `kmom01/bank`.


### Förutsättning

Det förutsätts att du gått igenom artiklarna för [kursmoment 01](../articles/kmom01) och har miljön på plats.


### Intro

Den lokala banken Pirate Banking AB har lite problem med att beräkna räntan på insatt kapital och har bett dig om hjälp. Räntan i detta fallet beräknas på årsbasis och adderas till kontot en gång per år. Du får i uppdrag att göra en prototyp med förinställda värden:

* Kapital: 150000 guld
* Ränta: 2% / år
* Tid: 4 år


Beräkna räntan på följande sätt: `[result] = ([time] × [capital] × [interest]) / 100`



### Krav

Skapa ett script `kmom01/bank.js` som löser följande krav:

1. Skriv ut dagens datum i formatet: YYYY-MM-DD, tex `2021-05-20`.
1. Beräkna det slutgiltiga kapitalet och skriv ut det. Se till att det är ett heltal som skrivs ut.
1. Skriv ut hur mycket ränta som har lagts på. Se till så det är ett flyttal.

Ett exempel på hur det skulle kunna se ut när man exekverar scriptet:

```shell
$ node bank.js
2021-05-20
145637
13200.234
```


### Avslutningsvis

Lycka till och hör av dig om du kör fast eller har några funderingar.

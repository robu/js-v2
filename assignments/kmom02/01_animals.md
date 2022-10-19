# Uppgift - "Animals"

I den här uppgiften ska du skapa ett par moduler som exporterar fördefinierad funktionalitet.

Du jobbar i mappen `kmom02/`.

### Förutsättning

Det förutsätts att du gått igenom artiklarna för [kursmoment 02](../../articles/kmom02).

### Intro

Efter ditt jobb med glaciärerna är dina kunskaper efterfrågade i andra sammanhang. Organisationen "Hållbara djur" vill att du hjälper dem med dokumentationen av utrotningshotade djur. De vill ha en uppsättning av något som tydligen kallas "ES moduler".

Den data du kan få är listor på några utrotningshotade djur i olika platser på jorden. Du hittar tre filer i exempelmappen som du börjar med att kopiera in i arbetsmappen:

```console
# Stå i kursmappens rot
$ cp example/animals/animals.mjs me/kmom02/
```

### Krav

1. Skapa en fil `kmom02/main.mjs` som du kan ha för att testa dina moduler.

1. Du ska nu skapa två moduler, `kmom02/helpers.mjs` och `kmom02/report.mjs`. Funktionaliteten och funktionsnamnen modulerna ska innehålla kan ni se i den genererade dokumentationen. Antingen öppnar ni [example/animals](../../example/animals/jsdoc/) lokalt i en webbläsare eller via [htmlpreview](https://htmlpreview.github.io/?https://raw.githubusercontent.com/dbwebb-se/js-v2/master/example/animals/jsdoc/index.html). Var noga med returvärden och namngivning. Se dokumentationen som en mall att följa.

1. Funktionen **prettyPrint** ska se ut som följer om man exekverar funktionen med argumentet `africa`:

```console
--- REPORT ---
Animals in africa

* <animal>
* <animal>
* <animal>
* <animal>
* <animal>
* <animal>
* <animal>
...
```

Om man exekverar utan ett argument blir det istället:

```console
--- REPORT ---
Animals in all continents

* <animal>
* <animal>
* <animal>
* <animal>
* <animal>
* <animal>
* <animal>
...
```

### Validering

Se till så koden validerar:

```console
$ cd me
$ npm run linter kmom02/
```

<!--
### Hur kan det se ut när det är klart?

Nedan är en video som visar hur det kan se ut när det är klart:

[![js exercise kmom02](https://img.youtube.com/vi/EKFOlAsJDkE/0.jpg)](https://www.youtube.com/watch?v=EKFOlAsJDkE) -->

### Avslutningsvis

Lycka till och hör av dig om du kör fast eller har några funderingar.

<!-- [TBD: Länk till issues](#) -->

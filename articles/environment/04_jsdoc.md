# JSDoc

Ett bra tips när man skriver kod är att dokumentera den. Det är dels för ens egna del men även för andra som eventuellt kan komma att behöva jobba med koden. För en själv kan det handla om att man kommer tillbaka till kod man skrivit tidigare och behöver friska upp minnet. För andra kan det helt enkelt handla om att man behöver sätta sig in i koden och förstå den. I JavaScript kan vi använda ett verktyg som automatiskt genererar dokumentation utefter våra kommentarer.

### JSDoc i kursen

I den här kursen används verktyget JSDoc för dokumenteringen av koden. Vi har med en konfigurationsfil för att kunna använda filer med filändelsen `.mjs`. Du kan hitta filen i [exempelmappen](../../example/environment). Kopiera in filen till din me-mapp:

```console
# stå i kursens rotmapp
$ cp example/environment/jsdoc.json me/
```

### Komma igång med JSDoc

Vi genererar dokumentationen i terminalen med hjälp av `npm`. Filen som heter `package.json` är redan förberedd på att använda JSDoc. Vi tittar i package.json igen och ser följande rad:

```json
"scripts": {
    ...
    "jsdoc": "./node_modules/.bin/jsdoc -c jsdoc.json -d $npm_config_kmom/jsdoc $npm_config_kmom/*"
},
```

Vad är det som händer där då? Vi kan se två stycken så kallade "options": `-c` och `-d`. Med -c kan vi definiera en egen configfil som vi har kopierat in ovan. Via den möjliggörs det att även kunna skapa dokumention från `-mjs`-filer. Med -d kan vi ange en mapp där dokumentationen ska hamna. Om vi inte sätter den själva kommer det skapas en mapp `out` där vi är för tillfället.

Vidare nyttjar vi möjligheten till att ta emot variabler i vårt script för att underlätta hanteringen. `$npm_config_kmom` kommer innehålle det vi skickar med som `--kmom=kmom01`. Vi kör alltså till exempel detta kommando när vi står i me-mappen: `npm run jsdoc --kmom=kmom01`. Det kommer "översättas" till: `./node_modules/.bin/jsdoc -c jsdoc.json -d kmom01/jsdoc kmom01/*`. Stjärnan (`*`) är ett wildcard som i detta fallet betyder "alla js-filer i mappen".

När vi genererar filerna kommer det skapas en mapp som heter `jsdoc` i den mappen som vi vill skapa dokumentation för. Där i finner vi bland annat en `index.html` som vi öppnar i webbläsaren och får se den genererade dokumentationen.

### Hur gör man då?

För att JSDoc ska förstå vad som händer i koden måste vi kommentera den. Det finns en uppsättning regler för hur kommentarerna bör se ut för att följa standarden. 

Här följer ett exempel på några kommentarer:

```js
/**
 * @function addNumbers
 * @param {number} num1 The first number to use
 * @param {number} num2 The second number to use
 * @returns {number} The calculated result
 * */
function addNumbers (num1, num2) {
    return num1 + num2;
}
```

Vi börjar med att beskriva att det är en funktion samt funktionens namn. `@param` beskriver som väntat vilka parametrar funktionen vill ha, vilken datatyp (number) samt ett namn och en beskrivning. Slutligen kan vi använda `@returns` för att beskriva returvärde. Även där sätter vi datatypen. 

På sidan [jsdoc.app](https://jsdoc.app/index.html) kan vi se hur alla tänkbara konstruktioner ska se ut.
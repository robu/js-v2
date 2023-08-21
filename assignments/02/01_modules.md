Moduler
==================================

I den här artikeln går vi igenom vad en modul är och rätar ut frågetecknen runt olika typer av moduler.

Filerna som används kan ni hitta i [exempelmappen](../../example/modules/toolbox).

### Vad är en modul?

Från början var JavaScript program oftast små script som löste en liten uppgift i webbläsaren där det behövdes. Det fanns inget behov att dela upp koden i mindre fristående delar. Nu för tiden finns hela program och spel som körs i webbläsaren med en rysligt massa JavaScript. Vi kör även JavaScript på serversidan (tex node.js), vilket medför att det totalt körs mycket mer JavaScript överallt. JavaScript på serversidan har kunnat importera moduler länge och sedan några år tillbaka har turen kommit till webbläsaren.

En modul är en isolerad del med scriptkod som oftast innehåller det som just den delen behöver, isolerat från övrig kod. Man kan med fördel bara importera den när man behöver den och den blir enklare att underhålla.

Ni som har läst pythonkursen har redan jobbat med moduler och har kanske en känsla för vad det handlar om. Från webteckursen kan det liknas vid funktioner som ni separerade i filer.



### ESM vs CommonJS

När man pratar om moduler i JavaScript så finns det såklart flera varianter att hålla isär. Standardvarianten är ESM (EcmaScript Modules) och dök upp i samband med ES6 2015.



#### ESM

Den varianten vi ska använda är ESM. Vi kan exportera en funktion eller variabel med namn eller som ett default-värde. För att till exempel exportera funktionen `sum()` namngiven kan vi göra på följande sätt:

```js
// module.js
function sum (x, y) {
  return x + y
}

export { sum }

// Alternativt:
// export const sum = (x, y) => x + y
```

Och sedan importera den från en annan fil:

```js
// main.js
import { sum } from './module.js';

console.log(sum(26, 16)) // 42
```


Om vi istället vill exportera funktionen som ett default värde och kunna importera den med valfritt namn ser det ut så här:

```js
// module_default.js
function sum (x, y) {
  return x + y
}

export default sum
```

```js
// main_default.js
import anything from './module_default.js'

console.log(anything(26, 16))
```

Vi kan även välja vad vi vill att den importerade funktionen/variabeln ska heta med nyckelordet `as`:

```js
// Example of import - as
import { sum as anything } from './module.js'
```

Man kan även använda wildcardet `*`: `import * as anything from ...` för att importera allt. Det är dock inte att föredra då det blir odiciplinerat att inte veta vad vi vill importera.



#### Hur "aktiverar" man moduler?

För att kunna använda ES moduler på serversidan, nodejs, behöver vi lägga till `type: "module"` i den närmsta `package.json` uppåt i mappstrukturen. För webbläsaren och "klientside-js" sätter vi `<script type="module" src="path/to/file.js"></script>` i htmlfilen. Man kan även stöta på filändelsen `.mjs` men vi kör på `.js` i den här kursen. För att webbläsaren ska kunna hantera moduler behöver vi även serva flerna via en webbserver. I kursen används npmmodulen *http-server* som du kan se i package.json.



#### CommonJS

En annan variant av JavaScriptmoduler man stöter på är *CommonJS* moduler. Det är node.js varianten och används på serversidan. Den skillnaden vi behöver ha koll på nu är att man importerar och exporterar koden på följande sätt:

Om vi tar föregående exempel och gör om det till en CommonJS modul ser det ut så här:

```js
// module.js
function sum (x, y) {
  return x + y
}

module.exports = sum

// main.js
const sum = require('./module.js')

console.log(sum(34, 8))
```



### Avslutningsvis

Läs mer om [moduler på MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

# ESLint

Många programmeringsspråk har en standardsyntax att följa. Det kan handla om att det ska finnas en tom rad längst ner i scriptfilen eller att det ska vara ett mellanslag innan öppningsparanteser. En så kallad *linter* hjälper oss att styra upp koden innan den exekveras och vi blir tvingade att följa en viss standard. Det kan vara en standard som en arbetsgrupp har diskuterat fram eller en generell standard.



### ESLint i kursen

I den här kursen används ES standard, med vissa inställningar. Du kan hitta filen i [exempelmappen](../../example/eslint). Det är den du kommer använda och det är även den som läraren använder vid rättning.

Då formatet på kursen är nytt så kan konfigurationen vara diskuterbar. Om valideringen säger ifrån och du känner att du vill/kan motivera varför regeln ska ändras är det fritt fram. Gör bara en issue i jsrepot så tar vi det där ifrån.


### Komma igång med lintern

Vi kör vår linter i terminalen med hjälp av `npm`. Det finns en fil som heter `package.json` i exempelmappen som har följande rader:

```json
"dependencies": {
  "eslint": "^7.26.0",
  "eslint-config-standard": "^16.0.2",
  "eslint-plugin-import": "^2.23.2",
  "eslint-plugin-node": "^11.1.0",
  "eslint-plugin-promise": "^5.1.0"
}
```

Du kan då ställa dig i mappen `$ cd example` och installera de beroenden som finns definierade där:

```shell
$ npm install
# massa utskrifter från installationen
```

Sådär! Nu har du fått en till mapp som heter `node_modules` som innehåller allt du behöver för att testa koden.

Vi tittar i package.json igen och ser följande rader:

```json
"scripts": {
  "linter": "eslint -c eslint/.eslintrc.json"
},
```

Där talar vi om att med kommandot *linter* vill vi köra eslint med den definierade configfilen som finns i mappen eslint/.



### Exekvera valideringen

Hur gör vi då för att testa koden?

När vi står i mappen med package.json kan vi köra scriptet med:

```shell
$ npm run linter <folder or file>
```

Låt säga att det är ett valideringsfel i filen `kmom01/forloop.js` och vi kör lintern på den:

```shell
$ npm run linter kmom01/forloop.js

> example@1.0.0 linter
> eslint -c eslint/.eslintrc.json "kmom01/forloop.js"


/home/klw/git/work/dbwebb-kurser/js-v2/example/kmom01/forloop.js
  5:17  error  Extra semicolon  semi

✖ 1 problem (1 error, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.
```

Vi kan där se vilken fil, rad och plats det handlar om:

```shell
...
/home/klw/git/work/dbwebb-kurser/js-v2/example/kmom01/forloop.js
  5:17  error  Extra semicolon  semi
...
```

Rad 5, tecken nummer 17 i forloop.js. Det är av typen "error", felet är "Extra semicolon" och felet heter "semi". Mycket yttig information.

Om vi inte vill fixa det själva finns en fantastisk grej som vi såg längst ner när vi körde lintern:

```shell
✖ 1 problem (1 error, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.
```

Vi kan lösa de felen automatiskt med ett option `--fix`:

```shell
$ npm run linter kmom01/forloop.js -- --fix
```

`--` talar om att det kommer ett argument till kommandot och `--fix` är själva optionet.

# ESLint

Många programmeringsspråk har en standardsyntax att följa. Det kan handla om att det ska finnas en tom rad längst ner i scriptfilen eller att det ska vara ett mellanslag innan öppningsparanteser. En så kallad *linter* hjälper oss att styra upp koden innan den exekveras och vi blir tvingade att följa en viss standard. Det kan vara en standard som en arbetsgrupp har diskuterat fram eller en generell standard.



### ESLint i kursen

I den här kursen används ES standard, med vissa inställningar. Du kan hitta filen i [exempelmappen](../example/configfiles). Det är den du kommer använda och det är även den som läraren använder vid rättning. Kopiera in filen till din me-mapp:

```console
# stå i kursens rotmapp
$ cp docs/example/configfiles/.eslintrc.json me/
```

Då formatet på kursen är nytt så kan konfigurationen vara diskuterbar. Om valideringen säger ifrån och du känner att du vill/kan motivera varför regeln ska ändras är det fritt fram. Gör bara en issue i jsrepot så tar vi det där ifrån.



### Komma igång med lintern

Vi kör vår linter i terminalen med hjälp av `npm`. Filen som heter `package.json` i me-mappen som har bland annat beroenden som börjar med `eslint*`. Det är de som lintern kommer använda. Vi tittar i package.json igen och ser följande rader:

```json
"scripts": {
    "eslint": "npx eslint ./$npm_config_kmom || exit 0",
    "eslint:fix": "npx eslint ./$npm_config_kmom --fix || exit 0",
    // fler paket
},
```

Där talar vi om att med kommandot *eslint* vill vi köra eslint med den definierade configfilen som numer ligger i me-mappen och heter ".eslintrc.json". De flesta fel som dyker upp kan vi överlåta åt lintern att fixa med kommandot: *eslint:fix*. Vi kan även skicka med ett argument och välja katalog att validera.



### Exekvera valideringen

Hur gör vi då för att testa koden?

När vi står vår me-mapp kan vi köra scriptet med:

```console
# Specific folder
$ npm run eslint --kmom=<folder>

# All subfolders and files
$ npm run eslint
```

Låt säga att det är ett valideringsfel i filen `kmom01/forloop.js` och vi kör lintern på den:

```console
$ npm run eslint --kmom=kmom01

> dv1657@1.0.0 eslint
> npx eslint ./$npm_config_kmom || exit 0


/some/path/to/forloop.js
  5:17  error  Extra semicolon  semi

✖ 1 problem (1 error, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.
```

Vi kan där se vilken fil, rad och plats det handlar om:

```console
...
/some/path/to/forloop.js
  5:17  error  Extra semicolon  semi
...
```

Rad 5, tecken nummer 17 i forloop.js. Det är av typen "error", felet är "Extra semicolon" och felet heter "semi". Mycket nyttig information.



### "Fixer"

Om vi inte vill fixa det själva finns en fantastisk grej som vi såg längst ner när vi körde lintern:

```console
✖ 1 problem (1 error, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.
```

Vi kan lösa de felen automatiskt med ett option `--fix`. Kikar vi i `package.json` igen så kan vi se att vi har ett eget script som hjälper oss här med:

```json
"eslint:fix": "npx eslint ./$npm_config_kmom --fix || exit 0",
```

Kör scriptet med:

```console
$ npm run eslint:fix --kmom=kmom01
```

Som nämn ovan så kommer läraren använda configfilen från exempelmappen vid rättning så om den visar grönt är allt ok vad det gäller validering. Skulle det visa fel kommer det sannolikt bli komplettering. Det är bra att ha koll på.

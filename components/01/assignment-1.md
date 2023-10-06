Uppgift - "Basics"
==================================

Skapa några scriptfiler där du använder några vanliga konstruktioner i JavaScript.


Förkunskaper
-----------------------

Du har installerat kursens labbmiljö samt installerat kommandot `dbwebb` och du har clonat kursrepot för kursen.



Introduktion
-----------------------

Du ska skapa en uppsättning scriptfiler som var för sig utför olika uppgifter. Alla filer ska jobba med inkommande argument via `process.argv`. Du kan se hur man går tillväga i [exempelmappen](../../example/node). Du kan räkna med att användaren skickar in rätt datatyp.


Krav
-----------------------

Jobba i mappen `me/kmom01` och skapa där följande script som löser respektive uppgift. `<arg>` ska bytas ut mot det inskickade argumentet.

1. Skapa filen `if-numbers.js`. Skapa if-satser som vid exekvering (`$ node if-numbers.js <arg>`) gör följande kontroller och utskrifter:
  * Om argumentet är lägre än 10: `<arg> är lägre än 10.`.
  * Om argumentet är högre än eller lika med 100: `<arg> är högre än eller lika med 100.`.
  * Om argumentet är högre än 10 och lägre än 20: `<arg> är mellan 10 och 20.`.
  * Om argumentet är ett jämt tal: `<arg> är ett jämt tal.`.
  * Om argumentet är ett udda tal: `<arg> är ett udda tal.`.
  * Om argumentet är 42: `Meaning of life.`.

2. Skapa filen `forloop.js`. Vid exekvering ska det skrivas ut:
  * Alla värden från 5 till och med 10.
  * Varannat värde mellan 100 och 110.
  * Alla värden från 5 till och med -5.
 
2. Via den inlänkade filen `main.js` ska du skriva ut följande i consolen:
  * Siffrorna 10 - 20 (for-loop)
  * Siffrorna 100 - 85 (while-loop)
  * En hälsningsfras tillsammans med dagens datum (funktion)

3. Du kan uppdatera stylesheet i katalogen `css/`. Det är inte nödvändigt, gör det om du vill och känner att du har tid.

4. Kör `dbwebb test kmom01` för att se så allt validerar och att filerna ligger på rätt plats.

```console
$ dbwebb test kmom01
```

5. Publicera koden på studentservern:

```console
$ dbwebb publish public
```

> **_GLÖM INTE:_** Vill du köra en enskild validering kan du göra det med: `$ npm run {eslint,htmlhint,stylelint} --what=<folder>`

Extrauppgift
-----------------------

Om du har tid och kraft.

1. Lägg extra kraft på CSS och styla din me-sida så den blir mer personlig.

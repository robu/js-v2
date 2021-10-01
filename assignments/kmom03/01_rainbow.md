# Uppgift - "Rainbow"

I den här uppgiften ska du skapa former i olika färger och arbeta med DOM-trädet och dess funktionalitet.

Du jobbar i mappen `kmom03/`.



### Förutsättning

Det förutsätts att du gått igenom artiklarna för [kursmoment 03](../../articles/kmom03). De ger dig koll på hur vi börjar jobba med JavaScript och webbläsaren.



### Intro

Nu börjar fler få upp ögonen för ditt sinne för programmering och nästa jobb väntar! Rörelsen "eQuality" behöver en dynamisk webbsida där användaren kan interagera med innehållet. Användaren ska kunna klicka på former och få se namnen på några av historiens största förkämpar för mänskliga rättigheter och människans lika värde.

De kan ge dig en start att utgå ifrån och av någon anledning har de lagt filerna i exempelmappen. Mycket märkligt, tänker du, men det är bara att kopiera in dem och köra:

```console
# Ställ dig i kurmappen
$ cp -r example/rainbow/* me/kmom03/
```



### Krav

1. Du får enbart ändra i filen `main.js`.
1. Varje gång man klickar på knappen ska en form ritas ut med korrekt bakgrundsfärg. Färgerna finns i ordning i en array i `main.js`.
1. Knappen ska visa vilken bild som kommer näst. När alla bilder är framme, tas knappen bort.
1. När man klickat på knappen ska det även läggas till en eventlyssnare som lägger till en ram runt formen. När man för musen utanför ska ramen försvinna.
1. När man klickat på en form ska respektive namn och år skrivas ut tillsammans med bilden. Namn och år finns i `main.js` och bilden finns i mappen `img/`.
1. Alla eventlyssnare ska tas bort när man klickat på en form.
1. Utöver dessa krav vill de se hur dina vingar bär. Utmana dig själv och lägg gärna till mer funktionalitet.
1. Se till så koden validerar `$ npm run linter me/kmom03`.



TBD: youtube klipp med hur kan det se ut?



### Extra uppgift (Optionell)

1. Kan du lägga till en eventlyssnare som gör att man kan "vända tillbaka" korten?

1. Du kanske till och med kan göra ett memoryspel av korten?



### Validering

Se till så koden validerar:

```console
$ cd me
$ npm run linter kmom03/
```



### Avslutningsvis

Lycka till och hör av dig om du kör fast eller har några funderingar.

[TBD: Länk till issues](#)

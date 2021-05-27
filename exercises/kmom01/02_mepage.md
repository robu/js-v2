Uppgift - "Me page"
==================================

Skapa en me-sida för redovisningar i din dbwebb-kurs. Du kopierar en struktur för en webbsida som består av HTML, CSS och JavaScript med ett färdigbyggt skal för de webbsidor som me-sidan skall bestå av.

När kursen är klar kommer din me-sida att samla en stor del av det arbetet du gjort under kursen, det blir en del av din redovisning av kursen.



Förkunskaper
-----------------------

Du har installerat kursens labbmiljö samt installerat kommandot `dbwebb` och du har clonat kursrepot för kursen.



Introduktion
-----------------------

I din me-sida skall du samla redovisningstexter och du länkar till de uppgifter du löst. Det ger dig en samlad plats att utgå ifrån när du vill visa upp vad du gjort i kursen.

Redovisningstexterna är en del av underlaget till [bedömning och betygsättning](https://dbwebb.se/kurser/faq/bedomning-och-betygsattning) i kursen.

Du kan testa hur me-sidan bör fungera, genom att öppna din exempel-katalog i kursrepot under `example/redovisa`.

Du kan bygga en mer avancerad me-sida om du vill, det går bra. Mallen finns med för de som vill ha en enkel me-sida.



Krav
-----------------------

I din kurskatalog (repot) för kursen, skall du ta en kopia av exempelkatalogen `example/redovisa` och lägga i din me-katalog under `me/redovisa`. Gör det med följande kommando i terminalen.

```console
# Gå till kurskatalogen
cp -ri example/redovisa me
```

1. Du har nu en grund för din me-sida i kursen. Modifiera den så den blir "din egen".

1. Uppdatera sidan `me.html` så att den innehåller en kort presentation av dig själv tillsammans med en bild som får representera dig.

1. I sidan `redovisning.html` skall du skriva dina redovisningstexter för varje kursmoment.

1. I sidan `om.html` lägger du till en godtycklig bild som du finner representativ för kursen.

1. Leta reda på kursrepot på GitHub och länka till det från din `om.html`.

1. I din `om.html`, länka även till kurssidan på dbwebb.se.

1. Du kan uppdatera stylesheet och eventuellt JavaScript i katalogerna `me/style` och `me/js`. Det är inte nödvändigt, gör det om du vill och känner att du har tid.

1. Gör en dbwebb publish för att kolla att allt validerar och fungerar.

```text
dbwebb publish redovisa
```



Extrauppgift
-----------------------

Om du har tid och kraft.

1. Lägg extra kraft på CSS och styla din me-sida så den blir mer personlig.

1. Lägg till något enkelt JavaScript som gör din me-sida än mer personlig.



Tips från coachen {#tips}
-----------------------

Koden bakom din me-sida behöver validera och följa god kodstandard.

Lycka till och hojta till i forumet om du behöver hjälp!

Uppgift - "Me page"
==================================

Skapa en me-sida för redovisning av uppgifterna i din dbwebb-kurs. Du kopierar en struktur för en webbsida som består av HTML, CSS och JavaScript med ett färdigbyggt skal för de webbsidor som me-sidan skall bestå av.

När kursen är klar kommer din me-sida att innehålla en stor del av det arbetet du gjort under kursen, det blir även din redovisning av kursen.



Förkunskaper
-----------------------

Du har installerat kursens labbmiljö samt installerat kommandot `dbwebb` och du har clonat kursrepot för kursen.



Introduktion
-----------------------

I din me-sida skall du samla programkod och uppgifter och du har länkar till de uppgifter du löst. Det ger dig en samlad plats att utgå ifrån när du vill visa upp vad du gjort i kursen.

<!-- Redovisningstexterna är en del av underlaget till [bedömning och betygsättning](https://dbwebb.se/kurser/faq/bedomning-och-betygsattning) i kursen. -->

Du kan testa hur me-sidan bör fungera, genom att öppna din exempel-katalog i kursrepot under `docs/example/redovisa`.

Du kan bygga en mer avancerad me-sida om du vill, det går bra. Mallen finns med för de som vill ha en enkel me-sida.



Krav
-----------------------

I din kurskatalog (repot) för kursen, skall du ta en kopia av exempelkatalogen `docs/example/redovisa` och lägga i din me-katalog under `me/redovisa`. Gör det med följande kommando i terminalen.

```console
# Gå till kurskatalogen
cp -ri docs/example/redovisa me
```

1. Du har nu en grund för din me-sida i kursen. Modifiera den så den blir "din egen". Se till så du presenterar dig själv med text och en godtycklig bild.

1. Via den inlänkade filen `main.js` ska du skriva ut följande i consolen:
  * Siffrorna 10 - 20 (for-loop)
  * Siffrorna 100 - 85 (while-loop)
  * En hälsningsfras tillsammans med dagens datum (funktion)

1. Du kan uppdatera stylesheet i katalogen `css/`. Det är inte nödvändigt, gör det om du vill och känner att du har tid.

1. Gör en dbwebb publish för att kolla att allt validerar och fungerar.

```text
dbwebb publish redovisa
```



Extrauppgift
-----------------------

Om du har tid och kraft.

1. Lägg extra kraft på CSS och styla din me-sida så den blir mer personlig.

1. Lägg till något enkelt JavaScript som gör din me-sida än mer personlig.

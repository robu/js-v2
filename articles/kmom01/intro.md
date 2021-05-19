Introduktion
==================================

Syftet med denna guide är att ge en introduktion till kärnan, de väsentliga delarna, i programmeringsspråket JavaScript, så som en programmerare tar sig an ett nytt programmeringsspråk.



### Versioner {#versioner}

JavaScript uppdateras flitigt och vid varje uppdatering tillkommer det funktionalitet. Webbläsarna, som renderar JavaScripten, måste då uppdateras för att kunna hantera den nya funktionaliteten. De två "stora" uppdateringarna var ES5 (ca 2009) och ES6 (ca 2015). Den senaste, i skrivande stund, är ES2020 vilken kom i juni 2020.

I den här kursen kommer vi ha ett fokus på grunderna i språket och hur det fungerar på klientsidan. Det finns exempel som bygger på ES5 och de som bygger på ES6. Vi har valt att inte dra det längre, utan vi håller oss däromkring. Det kan såklart finnas konstruktioner i senare versioner som går att använda, vilket uppmuntras om stödet finns i de vanliga webbläsarna.



Dokumentation och resurser
==================================

Använd Mozilla Developer Network (MDN) som [referens för JavaScript](https://developer.mozilla.org/en-US/docs/JavaScript).

Om du googlar så sätter du "mdn" först i din googling så hittar du referenssidorna på MDN.

StackOverflow i all ära, men om du verkligen vill veta svaret så behöver du ta dig till referensmanualen på MDN.

Använd manualerna flitigt. Lär dig slå upp i dem.



Utvecklingsverktyg
==================================

När man utvecklar JavaScript behöver man en utvecklingsmiljö och utvecklingsverktyg.

Det som ligger närmast till hands är en webbläsare och en grundstruktur för en webbsida. Du kan hitta en mall för att skriva dina exempel och testprogram i ditt kursrepo under `example/guide/sandbox`.

Din webbläsare har en developer tools (console) där du kan skriva enklare konstruktioner i JavaScript.

Du kan installera Node.js och köra dess interpretator i terminalen, det låter dig testa enklare konstruktioner på ett enkelt sätt (om du gillar terminalen).

Vill du göra kodexempel och dela med dig av koden så använder du online-verktyg likt jsfiddle eller codepen.

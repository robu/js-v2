# Uppgift - "Carbon Intensity"
<!-- https://github.com/owid/co2-data -->
I den här uppgiften ska vi använda data utifrån. Datan hämtas via http-protokollet med hjälp av fetch och vi ska använda datan för att populera en tabell.

Du jobbar i mappen `kmom05/`.

TBD: youtube klipp med hur kan det se ut?


### Förutsättning

Det förutsätts att du gått igenom artiklarna för [kursmoment 05](../../articles/kmom05) samt är det en fördel om du gjort tidigare kursmoment. De ger dig koll på hur vi börjar jobba med JavaScript och webbläsaren.



### Intro

Uppdragen rullar in och näst på tur står organisationen "Carbonara". Det är ett nystartat företag som vill fokusera på att övervaka kol, utsläpp, maskininlärning och elförbrukning. De känner att alla de begreppen ligger bra i tiden. De saknar dock den tekniska kompetensen och det är där du kommer in i bilden.

Som av en händelse har de hittat "[Carbon Intensity API](https://api.carbonintensity.org.uk/)" som är ett öppet API, skapat av National Grid ESO i samarbete med Environmental Defense Fund Europe och WWF. De övervakar och beräknar kolintensiteten för elförbrukning. Med hjälp av maskininlärning skapar de prognoser för hur det kommer se ut i kontrast till den faktiska intensiteten. Intensiteten mäts i gco2/kwh.

Datan finns tillgänglig på adressen `https://api.carbonintensity.org.uk/` och vi håller oss vid routen `/intensity/date/{date}` där `{date}` byts ut mot ett datum i formatet `YYYY-MM-DD`.

Läs mer om API:et i deras [dokumentation](https://carbon-intensity.github.io/api-definitions/#get-intensity-date-date).

De vill såklart att uppgiften ska packas ihop med webpack.

Du utgår ifrån din sandbox och har tillgång till tidigare uppgifter att hämta kod från.

```console
$ cd me
$ cp -r example/sandbox/* kmom05/
```

Kopiera även in filen `package.json` och se till så du har webpack installerat.



### Krav

1. Scripten `start` och `build` ska finnas med i package.json och bundlen ska hamna i `dist/` på samma sätt som i kmom04.
1. API:et ska användas för att hämta ut rätt data baserat på ett datum från användaren.
1. Man ska inte kunna välja datum tidigare än `2017-09-12`.
1. Det ska gå att filtrera resultatet på `all, very low, low, moderate, high, very high`.
1. Resulatet ska presenteras i en tabell.
1. Tabellens kolumner ska minst motsvara resultatet från API-anropet, dvs fem kolumner.



### Extra uppgift (Optionell)

1. Försök färga cellerna i `index` baserat på nivå. `low` hade kunnat vara grön, `very high` röd etc.
1. Kan du lägga till någon mer möjlighet till filtrering?


### Validering

Se till så koden validerar:

```console
$ cd me
$ npm run linter kmom05/
```



### Avslutningsvis

Lycka till och hör av dig om du kör fast eller har några funderingar.

[TBD: Länk till issues](#)

# Uppgift - "Glacier Report"

I den här första uppgiften ska du skapa script som hjälper till att beräkna förhållanden mellan de smältande glaciärerna och den stigande havsnivån. Du jobbar i mappen `kmom01/`.



### Förutsättning

Det förutsätts att du gått igenom artiklarna för [kursmoment 01](../../articles/kmom01) och har [miljön](../../articles/environment) på plats. Dubbelkolla så du har `me/package.json`, `me/.eslintrc.json` samt kört kommandot `$ npm install`.



### Intro

Att glaciärerna smälter är ett välkänt globalt problem och nu behövs din hjälp för att framställa en rapport som visar data över hur det egentligen ser ut.

Havsnivån har stigit sedan slutet av 1800-talet när människan började bränna kol, gas och andra fossila bränslen för energi. Koldioxiden som då skickas upp i atmosfären absorberar solens värme och håller den kvar. Det har gjort att planeten blivit varmare vilket i sin tur gjort att glaciärerna har börjat smälta och havsvattnet expanderat av värmen.

Man räknar med att de smältande glaciärerna har stått för ca 21% av havsnivåns stigning sedan år 2000 och globalt stiger havsnivån 3.6mm per år.

Mellan år 2000 och 2019 har glaciärernas smälthastighet generellt ökat från 0.36 meter per år till 0.69 meter per år. Du kan räkna med att det inte är exponentiellt utan en fast ökning per år.

Givet datan ovan ska du skapa en rapport enligt kraven nedan. Du får använda vilka konstruktioner du vill för att lösa uppgiften.



### Krav

Utgå ifrån att år 2000 är startdatum. Skapa ett script `kmom01/glacier.js` som skapar följande utskrift:

```console
$ node glacier.js
Year    Rate    Sea
------------------------
2000    0.36cm  0mm
2001    0.38cm  0.76mm
2002    0.39cm  1.51mm
2003    0.41cm  2.27mm
2004    0.43cm  3.02mm
2005    0.45cm  3.78mm
2006    0.46cm  4.54mm
2007    0.48cm  5.29mm
2008    0.5cm   6.05mm
2009    0.52cm  6.8mm
2010    0.53cm  7.56mm
2011    0.55cm  8.32mm
2012    0.57cm  9.07mm
2013    0.59cm  9.83mm
2014    0.6cm   10.58mm
2015    0.62cm  11.34mm
2016    0.64cm  12.1mm
2017    0.66cm  12.85mm
2018    0.67cm  13.61mm
2019    0.69cm  14.36mm
```



### Extra uppgift (Optionell)

Ta en kopia på föregående script och döp kopian till `glacier_extra.js`.

```console
$ cp glacier.js glacier_extra.js
```

Bygg om scriptet så man kan skicka in två argument till en funktion, `calculate(<endYear>, <logRate>)`, där`endYear` är året som rapporten ska sluta på och `logRate` är hur ofta åren ska skrivas ut.

Ett exempel på hur det kan se ut med argumenten `calculate(2050, 5)`:

```console
$ node glacier_extra.js
Year    Rate    Sea
------------------------
2000    0.36cm  0mm
2005    0.45cm  3.78mm
2010    0.53cm  7.56mm
2015    0.62cm  11.34mm
2020    0.71cm  15.12mm
2025    0.79cm  18.9mm
2030    0.88cm  22.68mm
2035    0.97cm  26.46mm
2040    1.05cm  30.24mm
2045    1.14cm  34.02mm
2050    1.23cm  37.8mm
```



### Validering

Se till så koden validerar:

```console
$ cd me
$ npm run linter kmom01/
```



### Hur kan det se ut när det är klart?

Nedan är en video som visar hur det kan se ut när det är klart:

[![js exercise kmom01](https://img.youtube.com/vi/LcIPQ3YlNLc/0.jpg)](https://www.youtube.com/watch?v=LcIPQ3YlNLc)




### Avslutningsvis

Lycka till och hör av dig om du kör fast eller har några funderingar.

[TBD: Länk till issues](#)

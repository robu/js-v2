# Uppgift - "Glacier Report"

I den här första uppgiften ska du skapa script som hjälper till att beräkna förhållanden mellan de smältande glaciärerna och den stigande havsnivån. Du jobbar i mappen `kmom01/`.

### Förutsättning

Det förutsätts att du gått igenom artiklarna för [kursmoment 01](../../articles/kmom01) och har [miljön](../../articles/environment) på plats. Dubbelkolla så du har `me/package.json`, `me/.eslintrc.json` samt kört kommandot `$ npm install`.

### Intro

Att glaciärerna smälter är ett välkänt globalt problem och nu behövs din hjälp för att framställa en rapport som visar data över hur det egentligen ser ut.

Havsnivån har stigit sedan slutet av 1800-talet när människan började bränna kol, gas och andra fossila bränslen för energi. Koldioxiden som då skickas upp i atmosfären absorberar solens värme och håller den kvar. Det har gjort att planeten blivit varmare vilket i sin tur gjort att glaciärerna har börjat smälta och havsvattnet expanderat av värmen.

Man räknar med att de smältande glaciärerna har stått för ca 21% av havsnivåns stigning sedan år 2000 och globalt stiger havsnivån 3.6mm per år.

Mellan år 2000 och 2019 har glaciärernas smälthastighet generellt ökat från 0.36 meter per år till 0.69 meter per år. Du kan räkna med att det inte är exponentiellt utan en fast ökning per år. Startvärdet på havsnivån är 0.

Givet datan ovan ska du skapa en rapport som visar upp en rapport där du för varje år räknar ut den aktuella smälthastigheten och den aktuella stigningen av havsnivån. Uppgiften är öppen för tolkning och exemplet nedan är inte skrivet i sten. Vill du konstruera rapporten på annat sätt är det helt ok. 

### Krav

1. Du får använda vilka konstruktioner du vill för att lösa uppgiften.

2. Utgå ifrån att år 2000 är startdatum. Skapa ett script `kmom01/glacier.js` som skapar en utskrift liknande:

```console
$ node glacier.js
Year	Melt rate (m)	Sea level (mm)
--------------------------------------
2000	0.36		    0
2001	<rate>		    0.756
2002	<rate>		    <level>
2003	<rate>		    <level>
2004	<rate>		    <level>
2005	<rate>		    <level>
2006	<rate>		    <level>
2007	<rate>		    <level>
2008	<rate>		    <level>
2009	<rate>		    <level>
2010	<rate>		    <level>
2011	<rate>		    <level>
2012	<rate>		    <level>
2013	<rate>		    <level>
2014	<rate>		    <level>
2015	<rate>		    <level>
2016	<rate>		    <level>
2017	<rate>		    <level>
2018	<rate>		    <level>
2019	0.69		    <level>
```

### Extra uppgift (Optionell)

Ta en kopia på föregående script och döp kopian till `glacier_extra.js`.

```console
$ cp glacier.js glacier_extra.js
```

Bygg om scriptet så man kan skicka in två argument till en funktion, `calculate(<endYear>, <logRate>)`, där`endYear` är året som rapporten ska sluta på och `logRate` är hur ofta åren ska skrivas ut. Tänk på att kommentera koden.

Ett exempel på hur det kan se ut med argumenten `calculate(2050, 5)`:

```console
$ node glacier_extra.js
Year	Melt rate (m)	Sea level (mm)
--------------------------------------
2000    <rate>		    <level>
2005    <rate>		    <level>
2010    <rate>		    <level>
2015    <rate>		    <level>
2020    <rate>		    <level>
2025    <rate>		    <level>
2030    <rate>		    <level>
2035    <rate>		    <level>
2040    <rate>		    <level>
2045    <rate>		    <level>
2050    <rate>		    <level>
```

### Validering

Se till så koden validerar:

```console
$ cd me
$ npm run linter kmom01/
```

### Avslutningsvis

Lycka till och hör av dig om du kör fast eller har några funderingar.

<!-- [TBD: Länk till issues](#) -->

Nummer och `Number`
==================================

JavaScript hanterar heltal, flyttal och hexadecimala tal som literaler. Vissa implementationer stödjer även oktala tal men det stödjs ej i standarden så vi undviker dem som literaler.

```javascript
2              // Integer
42             // Integer
4.2            // Float
3.14159265     // Float
7.01e11        // Float 701000000000
1.4297E-14     // Float 0.000000000000014297
0xff           // Hexadecimal
0x1a0f         // Hexadecimal
037            // Octal or not? Avoid octal numbers like this.
               // Never start integer with 0

Math.sqrt(-1)       // Fails and returns NaN, Not a Number, special case.
parseInt('no way')  // Fails and returns NaN.
toInteger('no way') // Succeeds and returns 0.
```

När en matematisk funktion eller en parsning av ett number misslyckas så returneras värdet `NaN` som betyder "Not a number". [Läs mer om Nan](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/NaN). Om man har en större beräkning och en del ger Nan så kommer hela uttrycket att bli Nan. Det kan göra det lite svårt att felsöka en komplex beräkning som ger Nan, men dela upp beräkningen i delar så blir det enklare att felsöka.

När vi jobbar med nummer så stöds de vanliga [aritmetiska operatorer](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators) som vi känner igen från andra programmeringsspråk.

Det finns en samling matematiska funktioner som är samlade i objektet [`Math`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Math). Med dessa kan du utföra vanliga matematiska beräkningar.

```javascript
Math.PI           // Constant value for PI
Math.random()     // Return a random number
Math.tan(2)       // Return tangent of 2
```

Det är objektet [`Number`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number) som används när du jobbar med nummer. Konvertering av värden sker automatiskt mellan literal och objekt, ofta spelar det ingen roll men det är bra att veta om man vill ha lite extra koll. Kika på objektet Number för att se vilka standardfunktioner som det erbjuder.

Var uppmärksam på Nan och Infinity i dina beräkningar. Se följande exempel.

```javascript
> 1/0
Infinity
> 0/0
NaN
> 0/1
0

> NaN > Infinity
false
> Infinity > NaN
false
> Infinity < (Infinity + 1)
false
> Infinity + 1
Infinity
```



Strängar och `String`
==================================

Strängar omsluts med enkelfnutt `'`, dubbelfnutt `"` eller backticks ``` speciella tecken kan escapas med backslash `\` på samma sätt som i andra programmeringsspråk. En tom sträng är `''` eller `""`. Strängar kan även innehålla unicode tecken enligt `\uXXXX` där `XXXX` är fyra hexadecimala siffror.

Strängkonkatenering sker med operatorn `+` eller `+=`.

Det finns en samling med sträng-funktioner som är samlade i objektet [`String`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String).



### Typkonvertering

JavaScript konverterar automatiskt mellan nummer och strängar vid behov. Se följande som ett exempel på hur värden av olika typer kan läggas ihop via automatiks typkonvertering.

```javascript
> 1 + 1
2
> "1" + 1
'11'
> 1 + "1"
'11'
> 1 + true
2
> "1" + true
'1true'
> true + 1
2
> true + 1 + NaN
NaN
```

Försök undvika att värden av olika typer beräknas på detta atuomatiska sätt, det kan bli en potentiell felkälla i din kod.



### Kontrollerad typkonvertering

Vill du ha mer kontroll på hur konvertering sker kan du använda funktionerna [`parseInt()`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/parseInt) och [`parseFloat()`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/parseFloat) för att konvertera strängar till nummer och [`toString()`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number/toString) för att konvertera nummer till strängar.

Notera att `toString` anropas som en metod på ett objekt, medan `parseInt` och `parseFloat` kan anropas som en funktion.

```javascript
> a = 42
42
> a.toString()
'42'
> parseInt("42 mopeder")
42
```

Vid sidan av alla objekt finns även en uppsättning av [globala funktioner](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects), där `parseInt` och `parseFloat` är två av dem.

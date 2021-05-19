Lexikalisk struktur
==================================

### Allmänt

JavaScript gör skillnad på små och stora bokstäver, nyckelordet `while` måste skrivas exakt så och inte `WHILE`. Variablerna `avar` och `aVar` är två skilda variabler.

JS bryr sig inte om blanka tecken som mellanslag och tabb. Du kan använda dem som du vill för att formatera ditt program. När du kör ett program "live" kan du ta bort alla tomma tecken, det är så som "minifiering" [^1] [^2] fungerar när det förminskar ett JavaScript för att snabba upp laddningshastighet av en sida, allt för att ge användaren en bättre upplevelse.

Semikolon avslutar ett "statement", men de är valfria. Därför kan du köra program även om de saknar semikolon. Bäst är att ha koll på sina semikolon och alltid lägga dit dem där de ska vara. Annars kommer interpretatorn att gissa sig fram till om det behövs ett semikolon eller ej. Gissningar kan leda till problem.

Kommentarer är samma som i PHP och C++. `//` för en-rads kommentarer och `/* */` för kommentarer som spänner över flera rader. Det finns också stöd för DocBlock kommentarer `/** */` och då i samverkan med externa verktyg för automatgenererande dokumentation [^3].



### Literaler

När du skriver in ett värde  i JavaScript är det en "literal" som kan tolkas som ett värde och en typ.

Följande visar hur literaler kan tolkas.

```javascript
42              // Talet 42
4.2             // Talet 4.2
"hello world"   // En sträng med text
'hej'           // En sträng till
true            // Ett boolskt värde
false           // Ett annat boolskt värde
null            // Ett null värde
undefined       // Ett odefinierat värde
/javascript/    // Ett reguljärt uttryck
{x:1, y:2}      // Ett objekt med två properties
[1, 2, "three"] // En array med tre värden
```

Pröva att skriva in någon av literalerna för att se hur JavaScript tolkar dem.



### Identifierare

En identifierare är en sträng som används för att namnge en variabel eller funktion. Reglerna för identifierare liknar andra programmeringsspråk.

> En identifierare börjar med en bokstav `a-z, A-Z`, understreck `_` eller dollartecken `$` och följs därefter av bokstav `a-z, A-Z`, understreck `_`, dollartecken `$` eller siffror `0-9`.

Följande är giltiga identifierare:

```javascript
myVar
moped
$
_
M64
i
```

Pröva att skriva in en identifierare och tilldela den ett värde av en literal.

```javascript
let myValue = "fortytwo";
myValue;
```



### Reserverade ord

Det finns ett antal [reserverade ord i JavaScript](https://developer.mozilla.org/en/JavaScript/Reference/Reserved_Words), dessa kan vara bra att ha lite koll på, kika på dem innan du går vidare. Du kan inte använda reserverade ord som namn på variabler.

Vilka ord som är reserverade kan skifta mellan olika versioner av JavaScript, du gör bäst i att undvika dem, oavsett vilken version du använder.

Nu ser vi hur JavaScript upplever typerna för de olika literalerna. De två sifforna är *number* och flera av literalerna upplevdes som *object*.

Låt oss fortsätta studera grunderna så att vi får bättre grepp om typerna som JavaScript erbjuder.

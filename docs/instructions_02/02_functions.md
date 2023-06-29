Funktioner
==================================

Funktioner är ett spännande kapitel i JavaScript. Även om allt är objekt så är JavaScript ett funktionsorienterat språk, men mer om det senare. Först tar vi grunderna.



### Allmänt

Funktioner kan skapas på olika sätt, jämför följande sätt att använda och skapa en funktion.

```js
function square (x) {           // Traditionellt sätt,
  return x*x                   // att jämföra med C/C++, PHP.
}
val = square(x)

let square = function (x) {     // Funktions literal / Funktion expression,
  return x*x                    // funktionen tilldelas en variabel
}
val = square(x)

element.onclick = function () {  // Namnlös funktion som används
  alert('Hello')                 // som eventhanterare.
}

element.addEventListener("click", function () {
  alert('Hello')                 // Variant på namnlös funktion som
})                               // eventhanterare som skickas som
                                 // parameter i en funktion.
```

Funktioner har en argumentlista. Om man anropar funktionen med färre argument än listan så får de kvarvarande argumenten värdet `undefined`.

```js
function sum(a, b, c) {
  return a + b + c
}

sum(1, 2, 3) // returnerar 6
sum(1, 2)    // returnerar NaN
```

Man kan ge "default"-värden på ett argument med hjälp av operatorn `||`. Studera följande funktion.

```js
function sum(a, b, c) {
  a = a || 0
  b = b || 0
  c = c || 0

  return a + b + c
}

sum(1, 2, 3) // returnerar 6
sum(1, 2)    // returnerar 3
```

Man kan även hantera en variabel argument-lista med identifieraren `arguments` som finns tillgänglig inuti funktionen.

```js
function sum() {
  let i, sum = 0

  for(i = 0; i < arguments.length; i++) {
  sum += arguments[i]
  }

  return sum
}

sum(1, 2, 3)           // returnerar 6
sum(1, 2, 3, 4, 5, 6)  // returnerar 21
```

Den inbyggda variabeln `arguments` är en array som innehåller samtliga argument som skickats till funktionen.



### Function declaration

En *function declaration* eller *function statement* definierar en namngiven funktionsvariabel. Man kan likna det vid att deklarera en vanlig varibel. Istället för `let` använder vi `function`:

```js
function taxes () {
  console.log("Taxes are declared.")
}

taxes() // Prints "Taxes are declared." in the console
```

Vi kan även skicka med argument till funktionen:

```js
function taxes (declared) {
  let message = 'Taxes are not declared.'

  if (declared) {
      message = 'Taxes are declared.'
  }

  console.log(message)
}

taxes(true) // Prints "Taxes are declared." in the console
```



### Function expression

*Function expression* tilldelar funktionen till en variabel som kan användas som identifierare. Funktionen är i sig anonym (namnlös) och deklareras när programmet körs.

```js
const speak = function () {
  console.log("I speak, therefore I am.")
}

speak() // Prints "I speak, therefore I am." in the console
```

Vi kan även skicka med argument till funktionen:

```js
const speak = function (what) {
  console.log(what)
}

speak("I speak, therefore I am.") // Prints "I speak, therefore I am." in the console
```



### Self-invoking

En *self-invoking* funktion är egentligen en *function expression* som exekveras automatiskt. För att tala om att det är en function expression behöver vi parenteser runt om och för att det ska exekveras automatiskt lägger vi till `()` i slutet:

```js
(function () {
  console.log("Self-invoking, baby!")
})()

// Prints "Self-invoking, baby!" in the console
```

Det kallas även *anonymous self-invoking function*.



### Hoisting

JavaScript behandlar variabler och dess deklarationer på ett speciellt sätt som kallas *hoisting*. Det innebär att deklarationerna flyttas högst upp i scopet. Det kan vara bra att ha det i åtanke när man strukturerar sin kod, då koden ibland kanske inte beter sig som man tänkt sig. Det gör sig speciellt tydligt med funktioner.



### Function declarations

Om man deklarerat en funktion på följande sätt:

```js
function speak () {
  console.log("Its working!")
}
```

Då kan man anropa den innan den kommer i programmets flöde:

```js
speak() // Prints "Its working!" in the console

function speak () {
  console.log("Its working!")
}
```

Anledningen är att JavaScript flyttar upp alla deklarationer högst upp så hela funktionen hamnar överst. Om vi istället tittar på ett expression:

```js
const speak = function () {
  console.log("Its working!")
}
```

Här deklareras inte funktionen förrän programmet körs. Deklarationen som sker är `const speak` vilket inte innehåller funktionen om man anropar den för tidigt:

```js
speak() // prints "Uncaught TypeError: speak is not a function" in the console

const speak = function () {
  console.log("Its not working!!")
}
```



### Anonyma funktioner

En anonym funktion, *anonymous function*, är en namnlös funktion. Det betyder att den inte har en namngiven identifierare, utan deklareras dynamiskt med funktions-operatorn när programmet körs.

```js
let whoAreYou = function () {
  console.log("We are Anonymous!")
}

whoAreYou() // Prints "We are Anonymous!" in the console
```

**whoAreYou** är en variabel som håller en anonym funktion.

Vi har sett ett användningsområde för en anonym funktion i eventlyssnaren:

```js
button.addEventListener("click", function () {
  // Do something
})
```

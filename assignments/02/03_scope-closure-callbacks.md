Scope, closure och callbacks
==================================

Låt oss ta en djupare titt på funktioner och hur de kan användas.



### Funktioner och scope

I ett programmeringsspråk innebär "scope" den synlighet och levnadstid som variabler och parametrar har. Det handlar om minneshantering och namnkonflikter. De flesta C-liknande programmeringsspråk har "block"-scope, alla variabler är synliga i det blocket de är definierade och försvinner ur scoopet när man går ur blocket.

JavaScript har block-scope, tack vare `let` och `const` som kom med ES6. Tidigare hade JavaScript bara "function"-scope vilket betyder att variabler som definierats i en funktion är *inte* synliga utanför den funktionen och en variabel i en funktion är synlig inom hela den funktionen, *inklusive* i funktioner som definierats i funktionen.

```js
function f1 (a) {
  const b = a + 1

  function f2 (c) {
    const d = c + 1

    return a + b + c + d - 2 // a, b, c, d is available
  }

  return f2(b)
}

f1(10) // Returns 42
f2() // Not callable
```

I programmeringsspråk med block-scope säger man att variabler skall definieras så sent som möjligt, precis innan de används eller i det blocket de används. I JavaScript definierar vi variablerna överst i funktionen, helst inom en enda `const/let`-deklaration separerade med kommatecken.



### Closure

I exemplet ovan har den inre funktionen `f2()` tillgång till allt som är definierat i funktionen `f1()`. Detta kallas för "[closure](http://en.wikipedia.org/wiki/Closure_%28computer_science%29)" vilket är ett välkänt begrepp i programmeringsspråk som stödjer [funktionell programmering](http://en.wikipedia.org/wiki/Functional_programming), programmeringsspråket [Lisp](http://en.wikipedia.org/wiki/Lisp_%28programming_language%29) är till exempel ett annat sådant språk.

Här är ett exempel på en closure där den inre funktionen har tillgång till de icke lokala variabler som fanns när funktionen definierades.

```js
// Example on closure where inner function has access to non-local variables
let accessToInner = (function () {
  let a = 1

  function inner (b) {
    a += b
    return a
  }

  return inner
})()

console.log(accessToInner(1)) // returns 2
console.log(accessToInner(1)) // returns 3
console.log(accessToInner(1)) // returns 4
console.log(accessToInner(1)) // returns 5
```

I fallet ovan blir `accessToInner` samma sak som funktionen `inner()` eftersom en anonyma funktionen exekveras och returnerar funktionen `inner`.

Studera följande kodrader för att se skillnaden.

```js
const myFunc = function () { console.log("hej") }

myFunc() // calls the function

const myString = (function () { return "hej" })()

console.log(myString) // just the string
```

Parenteserna gör att funktionen anropas direkt och är ett designmönster som hjälper att skapa ett closure. Detta sättet att automatiskt exekvera en funktion kallas self-invoking-anonymous-function (siaf), eller immediately-invoked-function-expression (iife/iffy).

En funktion har det scope som finns när den definieras, oavsett var den anropas. Man kan alltså definiera en funktion i en miljö och sedan förutsätta att funktionen exekveras i samma miljö. Detta ger möjligheter till inkapsling och låter oss undvika globala variabler. Därför är closure viktigt i JavaScript.



### Callbacks

En funktion utan namn kallas ibland för [anonym funktion](http://en.wikipedia.org/wiki/Anonymous_function) eller lambda-funktion. [Lambda](http://en.wikipedia.org/wiki/Lambda_calculus) kommer från matematiken,

Ett vanligt sätt att använda anonyma funktioner är för callbacks, följande exempel visar en eventhanterare, skapad med [`addEventListener()`](https://developer.mozilla.org/en/DOM/element.addEventListener) som tar hand om ett klick på en knapp via en anonym funktion som *callback funktion*.

```js
let button = document.getElementById('button')

button.addEventListener('click', function () {
  console.log('Great - you clicked the button!')
})
```

Enda gången som funktionen kommer anropas är i samband med att någon klickar på den specifika knappen. Det finns ingen anledning att spara undan funktionen i en variabel någonstans, eller att definiera funktionen i det globala scopet. Det räcker bra med att definiera funktionen precis där den används, som en anonym funktion.

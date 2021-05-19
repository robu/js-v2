Funtioner i JavaScript
=======================================================




#### funktioner

Vi kan såklart även använda funktioner i JavaScript.

```javascript
(function () {
  console.log(`I get executed immediatly`)
}())

function printSomethingNice () {
  console.log(`You look good today!`)
}

function printSomethingNiceArguments (how, when) {
  console.log(`You look ${how} ${when}!`)
}

const arrowFunction = () => console.log(`I am an arrow function!`)
const arrowFunctionArguments = (a, b) => a + b

printSomethingNice()
printSomethingNiceArguments(`good`, `today`)
arrowFunction()

const answer = arrowFunctionArguments(13, 29)

console.log(answer)

```

Läs mer om [LÄNKA TILL FUNKTIONER](#)



Avslutningsvis
------------------------------

Det var lite kort om de vanligaste konstruktionera i JavaScript och dess syntax.

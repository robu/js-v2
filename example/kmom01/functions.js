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

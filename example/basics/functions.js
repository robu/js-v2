/**
 * IIFE.
 */
(function () {
  console.log('I get executed immediatly')
}())

/**
 * Function contructor.
 */
function printSomethingNice () {
  console.log('You look good today!')
}

/**
 * Function contructor with arguments.
 * @param {string} how An adjective.
 * @param {string} when A tense.
 */
function printSomethingNiceArguments (how, when) {
  console.log(`You look ${how} ${when}!`)
}

const arrowFunction = () => console.log('I am an arrow function!')
const arrowFunctionArguments = (a, b) => a + b

printSomethingNice()
printSomethingNiceArguments('good', 'today')
arrowFunction()

const answer = arrowFunctionArguments(13, 29)

console.log(answer)

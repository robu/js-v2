import * as myCalc from './calculator.js';
import { randInt, roundDecimals } from './helpers.js';

const sum = myCalc.add(15, 27);
const difference = myCalc.sub(65, 23);
const product = myCalc.multiply(6, 7);
const randVal = randInt(12, 198);
const roundedDecimals = roundDecimals(45.3456, 2);

console.log(sum);
console.log(difference);
console.log(product);
console.log(randVal);
console.log(roundedDecimals);

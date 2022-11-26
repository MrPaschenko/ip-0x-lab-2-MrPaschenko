'use strict';

const fs = require('fs');
module.exports = {
  parse,
};

const string = fs.readFileSync('./input.txt', 'utf8');

function parse(string) {
  const array = string.split(' ');
  array.pop(); // delete "\n"
  return array;
}

class CalculatorState {
  constructor(screen, firstNumber, op, startSecondNumber) {
    this.screen = screen;
    this.firstNumber = firstNumber;
    this.op = op;
    this.startSecondNumber = startSecondNumber;
  }
}

console.log(parse(string));

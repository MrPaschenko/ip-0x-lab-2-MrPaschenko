'use strict';

const fs = require('fs');

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

function handleKeyPress(calculatorState, pressedKeyName) {
  switch (pressedKeyName) {
  case '1' :
    const int = parseInt(pressedKeyName);

    if (calculatorState.startSecondNumber) {
      calculatorState.screen = int;
    } else {
      calculatorState.screen = calculatorState.screen * 10 + int;
    }

    calculatorState.startSecondNumber = false;
    break;
  case '+' || '-' || '*' || '/':
    calculatorState.op = pressedKeyName;
    calculatorState.startSecondNumber = true;
    calculatorState.firstNumber = calculatorState.screen;
    break;
  case '=':
    const firstNumber = calculatorState.screen;
    const operation = calculatorState.op;
    const secondNumber = calculatorState.firstNumber;

    const answer = eval(`${firstNumber} ${operation} ${secondNumber}`);
    calculatorState.screen = answer;
    break;
  }
}

module.exports = {
  parse,
  handleKeyPress,
  CalculatorState
};

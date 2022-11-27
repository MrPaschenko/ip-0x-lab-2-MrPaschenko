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
  const parsedInt = parseInt(pressedKeyName);
  if (parsedInt >= 1 && parsedInt <= 9) {
    const int = parsedInt;

    if (calculatorState.startSecondNumber) {
      calculatorState.screen = int;
    } else {
      calculatorState.screen = calculatorState.screen * 10 + int;
    }

    calculatorState.startSecondNumber = false;
  }

  if (pressedKeyName === '+' ||
    pressedKeyName === '-' ||
    pressedKeyName === '*' ||
    pressedKeyName === '/') {

    calculatorState.op = pressedKeyName;
    calculatorState.startSecondNumber = true;
    calculatorState.firstNumber = calculatorState.screen;
  }

  if (pressedKeyName === '=') {
    const firstNum = calculatorState.screen;
    const operation = calculatorState.op;
    const secondNum = calculatorState.firstNumber;

    calculatorState.screen = eval(`${firstNum} ${operation} ${secondNum}`);
  }
}

function calculate(stringArray) {
  const newCalculatorState = new CalculatorState(0, 0, '', true);
  for (const element of stringArray) {
    handleKeyPress(newCalculatorState, element);
  }
  return newCalculatorState.screen;
}

module.exports = {
  parse,
  handleKeyPress,
  CalculatorState,
  calculate
};

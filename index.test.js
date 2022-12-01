'use strict';

const {
  parse,
  handleKeyPress,
  CalculatorState,
  calculate
} = require('./index');

test('Parse string', () => {
  const string = '1 2 3 + 4 5 6 = ';
  const array = parse(string);
  expect(array).toEqual(['1', '2', '3', '+', '4', '5', '6', '=']);
});

test('Change calculator state (1)', () => {
  const newCalculatorState = new CalculatorState(0, 0, '', true);

  handleKeyPress(newCalculatorState, '1');
  handleKeyPress(newCalculatorState, '2');
  handleKeyPress(newCalculatorState, '6');
  handleKeyPress(newCalculatorState, '+');
  handleKeyPress(newCalculatorState, '3');
  handleKeyPress(newCalculatorState, '2');
  handleKeyPress(newCalculatorState, '7');
  handleKeyPress(newCalculatorState, '=');

  expect(newCalculatorState).toEqual({
    screen: 453,
    firstNumber: 126,
    op: '+',
    startSecondNumber: false
  });
});

test('Change calculator state (2)', () => {
  const newCalculatorState = new CalculatorState(0, 0, '', true);

  handleKeyPress(newCalculatorState, '1');
  handleKeyPress(newCalculatorState, '+');
  handleKeyPress(newCalculatorState, '1');
  handleKeyPress(newCalculatorState, '=');

  expect(newCalculatorState).toEqual({
    screen: 2,
    firstNumber: 1,
    op: '+',
    startSecondNumber: false
  });
});

test('Change calculator state (3)', () => {
  const newCalculatorState = new CalculatorState(0, 0, '', true);

  handleKeyPress(newCalculatorState, '5');
  handleKeyPress(newCalculatorState, '7');
  handleKeyPress(newCalculatorState, '+');
  handleKeyPress(newCalculatorState, '1');
  handleKeyPress(newCalculatorState, '1');
  handleKeyPress(newCalculatorState, '1');
  handleKeyPress(newCalculatorState, '=');

  expect(newCalculatorState).toEqual({
    screen: 168,
    firstNumber: 57,
    op: '+',
    startSecondNumber: false
  });
});

test('Calculate 1 + 1', () => {
  const stringArray = ['2', '+', '2', '='];
  expect(calculate(stringArray)).toEqual(4);
});

test('Calculate 7 * 8', () => {
  const stringArray = ['7', '*', '8', '='];
  expect(calculate(stringArray)).toEqual(56);
});

test('Calculate 152 + 52', () => {
  const stringArray = ['1', '5', '2', '+', '5', '2', '='];
  expect(calculate(stringArray)).toEqual(204);
});

test('Calculate 123 + 456', () => {
  const stringArray = ['1', '2', '3', '+', '4', '5', '6', '='];
  expect(calculate(stringArray)).toEqual(579);
});

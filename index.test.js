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

test('Change calculator state', () => {
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

test('Calculate 1 + 1', () => {
  const stringArray = ['2', '+', '2', '='];
  expect(calculate(stringArray)).toEqual(4);
});

test('Calculate 123 + 456', () => {
  const stringArray = ['1', '2', '3', '+', '4', '5', '6', '='];
  expect(calculate(stringArray)).toEqual(579);
});

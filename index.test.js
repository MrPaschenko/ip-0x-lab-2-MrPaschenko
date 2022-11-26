'use strict';

const {
  parse,
} = require('./index');

test('Parse string', () => {
  const string = '1 2 3 + 4 5 6 = ';
  const array = parse(string);
  expect(array).toEqual(['1', '2', '3', '+', '4', '5', '6', '=']);
});

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

console.log(parse(string));

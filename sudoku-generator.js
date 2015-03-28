#!/usr/bin/env node
'use strict';
var meow = require('meow');
var sudokuGenerator = require('./');

var cli = meow({
  help: [
    'Usage',
    '  sudoku-generator <gridsize>',
    '',
    'Example',
    '  sudoku-generator 9'
  ].join('\n')
});

console.log(sudokuGenerator(cli.input[0]));

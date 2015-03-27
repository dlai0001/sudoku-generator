#!/usr/bin/env node
'use strict';
var meow = require('meow');
var sudokuGenerator = require('./');

var cli = meow({
  help: [
    'Usage',
    '  sudoku-generator <input>',
    '',
    'Example',
    '  sudoku-generator Unicorn'
  ].join('\n')
});

sudokuGenerator(cli.input[0]);

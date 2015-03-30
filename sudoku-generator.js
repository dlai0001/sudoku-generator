#!/usr/bin/env node
'use strict';

/**
 * Command line entry point
 * @type {function(): exports|exports}
 */

var meow = require('meow');
var sudokuGenerator = require('./');

var cli = meow({
    help: [
        'Usage',
        '  sudoku-generator <gridsize> <difficulty>',
        '',
        'Example',
        '  sudoku-generator 9 5',
        '',
        'Parameters:',
        '  <gridsize> - 9 for 9x9 or 6 for 6x6',
        '  <difficulty> - number of spots per row to blank out.',
        'Flags:',
        '  --show-solution : prints out the solution along side'
    ].join('\n')
});

process.stdout.write("\n\n");
//sudokuGenerator(cli.input[0], cli.input[1], cli.flags['showSolution']);

var gridSize = cli.input[0] || 9;
var difficulty = cli.input[1] || Math.floor(gridSize * 0.7);


var puzzle = sudokuGenerator(gridSize, difficulty);

printArryRecursive(puzzle.puzzle);

if (cli.flags['showSolution']) {
    process.stdout.write("\n\n");
    printArryRecursive(puzzle.solution);
}


process.stdout.write("\n\n");


/**
 * Prints contents of array recursively.  Also prints NULLs as '_'.
 * @param arry
 */
function printArryRecursive(arry) {
    process.stdout.write("[");

    for (var i = 0; i < arry.length; i++) {


        var item = arry[i];
        if (item instanceof Array) {
            if (i !== 0) {
                process.stdout.write(" ");
            }

            printArryRecursive(item);
            if (i !== (arry.length - 1 )) {
                process.stdout.write("\n");
            }
            continue;
        }

        if (arry[i] === null) {
            process.stdout.write("_");
        } else {
            process.stdout.write(arry[i].toString());
        }
        if (i !== (arry.length - 1)) {
            process.stdout.write(" ");
        }
    }

    process.stdout.write("]");
}

'use strict';

var dependable = require('dependable'),
    container = dependable.container();

container.register('Sudoku', function () {
    var Sudoku = require('./src/Sudoku.js');
    return Sudoku;
});

/**
 * Prints contents of array recursively.  Also prints NULLs as '_'.
 * @param arry
 */
function printArryRecursive(arry) {
    process.stdout.write("[");

    for (var i = 0; i < arry.length; i++) {

        var item = arry[i];
        if (item instanceof Array) {
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


module.exports = function () {
    container.resolve(function (Sudoku) {
        var sudoku = new Sudoku();
        var puzzle = sudoku.generate(9, 5).puzzle;

        printArryRecursive(puzzle);
    });
};

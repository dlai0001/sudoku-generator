'use strict';

var container = require('./src/Dependencies');





module.exports = function (gridSize, difficulty, showSolution) {
    var sudoku = new (container.get('Sudoku'));
    var puzzle = sudoku.generate(gridSize, difficulty);

    return puzzle;
};

'use strict';

var dependable = require('dependable'),
    container = dependable.container();

container.register('Sudoku', function () {
    var Sudoku = require('./src/Sudoku.js');
    return Sudoku;
});


module.exports = function () {
    container.resolve(function (Sudoku) {
        var sudoku = new Sudoku();
        console.log(sudoku.generate(9,6).grid);
    });
};

'use strict';

var dependable = require('dependable'),
    container = dependable.container();

container.register('Sudoku', function () {
    var Sudoku = require('./src/Sudoku.js');
    return Sudoku;
});


module.exports = function (str) {
    container.resolve(function (Sudoku) {
        /*
         * I'm a tax attorney
         * On a wood-paneled station wagon I ride
         * And I'm without outstanding warrants
         */
        new Sudoku(str);
    });
};

'use strict';


var should = require('should');
var _ = require('underscore');

var Sudoku = require('../src/Sudoku');
var sut = new Sudoku();


function countOccurrancesInArray(arry, itemToCount) {
    return _.filter(arry, function (item) {
        return item === itemToCount;
    }).length;
}

function validateNumberOccursOnlyOnceInArry(arry, numberToValidate) {
    var count = countOccurrancesInArray(arry, numberToValidate);
    should(count).be.exactly(1);
}

function validateNumberOccursOnlyOnceInMatrix(matrix, numberToValidate) {
    var count = 0;

    for (var i = 0; i < matrix.length; i++) {
        count += countOccurrancesInArray(matrix[i], numberToValidate);
    }
    should(count).be.exactly(1);
}

function getColumnAsArray(matrix, columnIndex) {
    var result = [];
    for (var i = 0; i < matrix.length; i++) {
        result.push(matrix[i][columnIndex]);
    }
    return result;
}

function getSubMatrix(matrix, xIndex, yIndex, width, height) {
    var result = [];

    for (var j = yIndex; j < yIndex + height; j++) {
        var row = [];

        for (var i = xIndex; i < xIndex + width; i++) {
            row.push(matrix[j][i]);
        }

        result.push(row);
    }

    return result;
}


describe('Main sudoku generator node module', function () {
    it('should not have duplicate numbers in any row.', function () {
        var output = sut.generate(9);

        for (var i = 0; i < output.grid.length; i++) {
            for (var j = 1; j <= 9; j++) {
                validateNumberOccursOnlyOnceInArry(output.grid[i], j);
            }
        }
    });

    it('should not have duplicate numbers in any column', function () {
        var output = sut.generate(9);

        for (var i = 0; i < 9; i++) {
            var column = getColumnAsArray(output.grid, i);

            for (var j = 1; j <= 9; j++) {
                validateNumberOccursOnlyOnceInArry(column, j);
            }
        }
    });

    it('should not have duplicate numbers in any section', function () {
        var output = sut.generate(9);

        for (var i = 0; i < 9; i++) {
            var sectionXIndex = (i % 3) * 3;
            var sectionYIndex = (Math.floor(i / 3)) * 3;

            var section = getSubMatrix(output.grid, sectionXIndex, sectionYIndex, 3, 3);
            for (var j = 1; j <= 9; j++) {
                validateNumberOccursOnlyOnceInMatrix(section, j);
            }
        }
    });
});



var assert = require('assert');
//var should = require('should');

var SudokuSeedDataGenerator = require('../src/SudokuSeedDataGenerator');
var sut = new SudokuSeedDataGenerator();


describe('SeedData module', function () {
    it.skip('should fetch a random 6x6 grid, with 2x3 sections', function () {
        assert(false, 'Not yet implemented.');
    });

    it.skip('should fetch a random 9x9 grid with 3x3 sections', function () {
        assert(false, 'Not yet implemented.');
    });

    it('should throw exception on unsupported size', function() {
        assert.throws(function() {
            sut.generate(11);
        }, /unsupported grid size/);
    });
});

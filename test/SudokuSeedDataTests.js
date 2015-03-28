var assert = require('assert');
var should = require('should');

var SudokuSeedDataGenerator = require('../src/SudokuSeedDataGenerator');
var sut = new SudokuSeedDataGenerator();


describe('SeedData module', function () {
    it('should fetch a random 6x6 grid, with 2x3 sections', function () {
        var output = sut.generate(6);
        should(output).have.property('grid').with.length(6);
        should(output.grid[5].length).be.exactly(6);
        should(output.sectionWidth).be.exactly(3);
        should(output.sectionHeight).be.exactly(2);
    });

    it.skip('should fetch a random 9x9 grid with 3x3 sections', function () {
        var output = sut.generate(9);
        should(output).have.property('grid').with.length(9);
        should(output.grid[5].length).be.exactly(9);
        should(output.sectionWidth).be.exactly(3);
        should(output.sectionHeight).be.exactly(3);
    });

    it('should throw exception on unsupported size', function() {
        assert.throws(function() {
            sut.generate(11);
        }, /unsupported grid size/);
    });
});

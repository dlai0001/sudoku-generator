//var assert = require('assert');
var dependable = require('dependable');
var should = require('should');

var SwappingTransformer = require('../src/SwappingTransformer');

describe('SwappingTransformer module', function () {
//    it('should swap the expected rows', function () {
//        assert(false, 'Not yet implemented.');
//    });
//
//    it('should swap the expected columns', function () {
//        assert(false, 'Not yet implemented.');
//    });
//


    describe('_shuffleColumns method', function () {
        it('should shuffle columns the same across all rows', function () {
            var grid = [
                [1, 2, 3],
                [4, 5, 6]
            ];

            //rig up shuffle to return first and third column swapped
            var container = dependable.container();
            container.register('ArrayShuffle', function () {
                return function () {
                    return [2, 1, 0];
                };
            });

            var swappingTransformer = new SwappingTransformer(container);
            swappingTransformer._shuffleColumns(grid, 0, 2);

            var expected = [
                [3, 2, 1],
                [6, 5, 4]
            ];
            var expectedAsString = JSON.stringify(expected);

            var gridAsString = JSON.stringify(grid);
            should(gridAsString).equal(expectedAsString);
        });
    });

    describe('_shuffleRows method', function () {
        it('should shuffle rows the same across all columns', function () {
            var grid = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ];

            //rig up shuffle to return first and third column swapped
            var container = dependable.container();
            container.register('ArrayShuffle', function () {
                return function () {
                    return [1, 0, 2];
                };
            });

            var swappingTransformer = new SwappingTransformer(container);
            swappingTransformer._shuffleRows(grid, 0, 2);

            var expected = [
                [4, 5, 6],
                [1, 2, 3],
                [7, 8, 9]
            ];
            var expectedAsString = JSON.stringify(expected);

            var gridAsString = JSON.stringify(grid);
            should(gridAsString).equal(expectedAsString);
        });
    });
});

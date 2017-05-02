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
    describe('_shuffleColumnGroups method', function () {
        var grid = [
            [1, 2, 3, 4, 5, 6],
            [10, 20, 30, 40, 50, 60]
        ];

        //rig up shuffle to return first and third column swapped
        var container = dependable.container();
        var arryShuffleSeed = [
            [2, 1, 0],
            [3, 5, 4]
        ];
        container.register('ArrayShuffle', function () {
            return function () {
                return arryShuffleSeed.shift();
            };
        });

        var swappingTransformer = new SwappingTransformer(container);
        swappingTransformer._shuffleColumnGroups(grid, 3);

        var expected = [
            [3, 2, 1, 4, 6, 5],
            [30, 20, 10, 40, 60, 50]
        ];
        var expectedAsString = JSON.stringify(expected);

        var gridAsString = JSON.stringify(grid);
        should(gridAsString).equal(expectedAsString);
    });

    describe('_shuffleColumnGroups method', function () {
        var grid = [
            [1, 1],
            [2, 2],
            [3, 3],
            [4, 4],
        ];

        //rig up shuffle to return first and third column swapped
        var container = dependable.container();
        var arryShuffleSeed = [
            [1, 0],
            [3, 2]
        ];
        container.register('ArrayShuffle', function () {
            return function () {
                return arryShuffleSeed.shift();
            };
        });

        var swappingTransformer = new SwappingTransformer(container);
        swappingTransformer._shuffleRowGroups(grid, 2);

        var expected = [
            [2, 2],
            [1, 1],
            [4, 4],
            [3, 3]
        ];
        var expectedAsString = JSON.stringify(expected);

        var gridAsString = JSON.stringify(grid);
        should(gridAsString).equal(expectedAsString);
    });

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

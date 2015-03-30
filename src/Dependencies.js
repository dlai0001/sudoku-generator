/**
 * Default container for Dependency injection.
 *
 * Dependencies used in final projection are wired up here.
 */

var dependable = require('dependable'),
    container = dependable.container();

container.register('Sudoku', function () {
    var Sudoku = require('./Sudoku.js');
    return Sudoku;
});

container.register('SudokuSeedDataGenerator', function () {
    return require('./SudokuSeedDataGenerator');
});

container.register('MaskingTransformer', function () {
    return require('./MaskingTransformer');
});

container.register('SwappingTransformer', function () {
    return require('./SwappingTransformer');
});

container.register('ArrayShuffle', function () {
    return require('shuffle-array');
});


module.exports = container;
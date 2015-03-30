/**
 * Default container for Dependency injection.
 *
 * Dependencies used in final projection are wired up here.
 */

var dependable = require('dependable'),
    container = dependable.container();

container.register('SudokuSeedDataGenerator', function() {
    return require('./SudokuSeedDataGenerator');
});

container.register('MaskingTransformer', function() {
    return require('./MaskingTransformer');
});

container.register('SwappingTransformerTests', function() {
    return require('./SwappingTransformerTests');
});

container.register('ArrayShuffle', function() {
    return require('shuffle-array');
});


module.exports = container;
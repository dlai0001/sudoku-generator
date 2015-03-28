/**
 * Default container for Dependency injection.
 *
 * Dependencies used in final projection are wired up here.
 */

var dependable = require('dependable'),
    container = dependable.container();

container.register('SudokuSeedDataGenerator', function() {
    return require('./SudokuSeedDataGenerator');
})

module.exports = container;
/**
 * Generates a sudoku puzzle.
 * @param gridSize - size of grid, 6 -> 6x6 or 9 -> 9x9
 * @param difficulty - number of squares to blank out per section.
 */

var dependencies = require('./Dependencies');

module.exports = function (container) {
    this._container = container || require('./Dependencies');


    this._seedDataGenerator = new (this._container.get('SudokuSeedDataGenerator'));


    this.generate = function (gridSize, difficulty) {
        return this._seedDataGenerator.generate(gridSize);
    }.bind(this);
};

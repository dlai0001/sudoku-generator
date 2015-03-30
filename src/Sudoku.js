/**
 * Generates a sudoku puzzle.
 * @param gridSize - size of grid, 6 -> 6x6 or 9 -> 9x9
 * @param difficulty - number of squares to blank out per section.
 */

var dependencies = require('./Dependencies');

module.exports = function (container) {
    container = container || require('./Dependencies');


    this._seedDataGenerator = new (container.get('SudokuSeedDataGenerator'));
    this._maskingTransformer = new (container.get('MaskingTransformer'));


    this.generate = function (gridSize, difficulty) {
        var solvedPuzzle = this._seedDataGenerator.generate(gridSize);

        var unsolvedPuzzle = this._maskingTransformer.applyMask(solvedPuzzle.grid, difficulty);
        
        var result = {
            solution: solvedPuzzle.grid,
            size: gridSize,
            sectionWidth: solvedPuzzle.sectionWidth,
            sectionHeight: solvedPuzzle.sectionHeight,
            puzzle: unsolvedPuzzle
        };

        return result;

    }.bind(this);
};

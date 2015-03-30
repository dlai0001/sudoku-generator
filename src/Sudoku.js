var defaultDependencies = require('./Dependencies');

/**
 * Generates a sudoku puzzle.
 * @param gridSize - size of grid, 6 -> 6x6 or 9 -> 9x9
 * @param difficulty - number of squares to blank out per section.
 */
module.exports = function (container) {
    container = container || defaultDependencies;


    this._seedDataGenerator = new (container.get('SudokuSeedDataGenerator'));
    this._maskingTransformer = new (container.get('MaskingTransformer'));
    this._swappingTransformer = new (container.get('SwappingTransformer'));

    this.generate = function (gridSize, difficulty) {
        var solvedPuzzle = this._seedDataGenerator.generate(gridSize);
        solvedPuzzle.grid = this._swappingTransformer.performTransforms(solvedPuzzle);

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

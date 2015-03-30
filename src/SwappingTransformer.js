var defaultDependencies = require('./Dependencies');
var _ = require('lodash');

/**
 * Performs swapping of rows or columns in a puzzle.
 *
 * This is used to
 * @param container - override any dependency injection
 */
module.exports = function (container, numberOfRounds) {

    var numberOfRounds = numberOfRounds || 5;

    container = container || defaultDependencies;
    var shuffle = container.get('ArrayShuffle');

    /**
     * Applies several rounds of shuffles to change the puzzle.
     * @type {function(this:module)|*}
     */
    this.performTransforms = function (completePuzzle) {
        var newPuzzle = copyGrid(completePuzzle.grid);
        var sectionWidth = completePuzzle.sectionWidth;
        var sectionHeight = completePuzzle.sectionHeight;

        for (var i = 0; i < numberOfRounds; i++) {
            this._shuffleColumnGroups(newPuzzle, sectionWidth);
            this._shuffleRowGroups(newPuzzle, sectionHeight);
        }

        return newPuzzle;
    }.bind(this);

    /**
     * Shuffles column wise
     * @type {function(this:module)|*}
     * @private
     */
    this._shuffleColumnGroups = function (grid, sectionWidth) {
        // Apply a shuffle for each section
        for (var i = 0; i < grid[0].length; i += sectionWidth) {
            this._shuffleColumns(grid, i, i + sectionWidth - 1)
        }
    }.bind(this);

    /**
     * Shuffles row wise
     * @type {function(this:module)|*}
     * @private
     */
    this._shuffleRowGroups = function (grid, sectionHeight) {
        // Apply a shuffle for each section
        for (var i = 0; i < grid.length; i += sectionHeight) {
            this._shuffleRows(grid, i, i + sectionHeight - 1)
        }
    }.bind(this);

    /**
     * Shuffles a contiguous set of columns.
     * @type {function(this:module)|*}
     * @private
     */
    this._shuffleColumns = function (grid, indexStart, indexEnd) {
        var columnsToShuffle = shuffle(_.range(indexStart, indexEnd + 1));

        //iterate over rows
        for (var i = 0; i < grid.length; i++) {

            var tempArray = grid[i].slice(); //copy row temporarily

            for (var j = indexStart; j <= indexEnd; j++) {
                grid[i][j] = tempArray[ (columnsToShuffle[j - indexStart])];
            }
        }

    }.bind(this);

    /**
     * Shuffles a contiguous set of rows.
     * @type {function(this:module)|*}
     * @private
     */
    this._shuffleRows = function (grid, indexStart, indexEnd) {
        var rowsToShuffle = shuffle(_.range(indexStart, indexEnd + 1));

        var shuffledRowContents = [];
        for (var i = 0; i < rowsToShuffle.length; i++) {
            shuffledRowContents.push(grid[rowsToShuffle[i]]);
        }

        // replacing the grid's rows with the shuffled rows
        for (var j = indexStart; j <= indexEnd; j++) {
            grid[j] = shuffledRowContents[j - indexStart];
        }

    }.bind(this);
}

function copyGrid(matrix) {
    var copyOfGrid = _.map(matrix, function (arry) {
        return arry.slice();
    });

    return copyOfGrid;
}
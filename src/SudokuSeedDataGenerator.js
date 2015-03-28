/**
 * Seed data generator for Sudoku puzzles.
 *
 * This class generates a valid completely solved baseline puzzle.
 * @param container - override injected dependencies.
 */

module.exports = function (container) {

    this._container = container || require('./Dependencies');

    /**
     * The size of the grid you wish to generate.
     * @param gridSize - Size of grid.  9 -> 9x9, 6 -> 6x6
     */
    this.generate = function (gridSize) {
        console.log("grid size is", gridSize);
        //check grid size
        switch (gridSize) {
            case 6:
                return {
                    grid: [
                        [1, 2, 3, 4, 5, 6],
                        [1, 2, 3, 4, 5, 6],
                        [1, 2, 3, 4, 5, 6],
                        [1, 2, 3, 4, 5, 6],
                        [1, 2, 3, 4, 5, 6],
                        [1, 2, 3, 4, 5, 6]
                    ],
                    sectionHeight: 2,
                    sectionWidth: 3
                };

            case 9:
                return {
                    grid: [
                        [1, 2, 3, 4, 5, 6, 7, 8, 9],
                        [1, 2, 3, 4, 5, 6, 7, 8, 9],
                        [1, 2, 3, 4, 5, 6, 7, 8, 9],
                        [1, 2, 3, 4, 5, 6, 7, 8, 9],
                        [1, 2, 3, 4, 5, 6, 7, 8, 9],
                        [1, 2, 3, 4, 5, 6, 7, 8, 9],
                        [1, 2, 3, 4, 5, 6, 7, 8, 9],
                        [1, 2, 3, 4, 5, 6, 7, 8, 9],
                        [1, 2, 3, 4, 5, 6, 7, 8, 9]
                    ],
                    sectionHeight: 3,
                    sectionWidth: 3
                };
            default:
                throw new Error("unsupported grid size");

        }
    }
};


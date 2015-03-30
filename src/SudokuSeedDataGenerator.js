/**
 * Seed data generator for Sudoku puzzles.
 *
 * This class generates a valid completely solved baseline puzzle.
 * @param container - override injected dependencies.
 */
module.exports = function () {

    /**
     * The size of the grid you wish to generate.
     * @param gridSize - Size of grid.  9 -> 9x9, 6 -> 6x6
     */
    this.generate = function (gridSize) {
        //check grid size
        switch (gridSize) {
            case 6:
                return {
                    grid: [
                        [1, 2, 3, 4, 5, 6],
                        [4, 5, 6, 1, 2, 3],
                        [2, 3, 4, 5, 6, 1],
                        [5, 6, 1, 2, 3, 4],
                        [3, 4, 5, 6, 1, 2],
                        [6, 1, 2, 3, 4, 5]
                    ],
                    sectionHeight: 2,
                    sectionWidth: 3
                };

            case 9:
                return {
                    grid: [
                        [5, 3, 4, 6, 7, 8, 9, 1, 2],
                        [6, 7, 2, 1, 9, 5, 3, 4, 8],
                        [1, 9, 8, 3, 4, 2, 5, 6, 7],
                        [8, 5, 9, 7, 6, 1, 4, 2, 3],
                        [4, 2, 6, 8, 5, 3, 7, 9, 1],
                        [7, 1, 3, 9, 2, 4, 8, 5, 6],
                        [9, 6, 1, 5, 3, 7, 2, 8, 4],
                        [2, 8, 7, 4, 1, 9, 6, 3, 5],
                        [3, 4, 5, 2, 8, 6, 1, 7, 9]
                    ],
                    sectionHeight: 3,
                    sectionWidth: 3
                };
            default:
                throw new Error("unsupported grid size");

        }
    }
};


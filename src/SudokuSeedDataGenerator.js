

module.exports = function(container) {

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
                break;
            case 9:
                break;
            default:
                throw new Error("unsupported grid size");

        }
    }
};


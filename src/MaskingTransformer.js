/**
 * MaskingTransformer takes a completed puzzle and removes elements from
 * each row to create a an incomplete puzzle.
 */

var _ = require('lodash');
var shuffle = require('shuffle-array');

function blankOutSpaces(arry, numberOfSpaces) {
    var sequenceToBlankOut = shuffle(_.range(arry.length));

    var result = arry.slice(); //copy the array

    for (var i = 0; i < numberOfSpaces; i++) {
        var spotToBlank = sequenceToBlankOut.pop();
        result[spotToBlank] = null;
    }

    return result;
}

module.exports = function() {
    /**
     * Applies a mask.
     * @param matrix - puzzle matrix to use.
     * @param difficulty - number of spots per row to blank out.
     */
    this.applyMask = function (matrix, difficulty) {
        var result = [];

        for (var i = 0; i < matrix.length; i++) {
            result.push(blankOutSpaces(matrix[i], difficulty));
        }

        return result;
    };
}

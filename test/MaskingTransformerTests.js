
var should = require('should');
var _ = require('lodash');

function countNullElementsInArray(arry) {
    return _.filter(arry, function (item) {
        return item === null;
    }).length;
}

describe('MaskingTransformer module', function () {

    var MaskingTransformer = require('../src/MaskingTransformer');
    var maskingTransformer = new MaskingTransformer();

    it('should blank out specified number of spots per row', function() {
        var matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];

        var result = maskingTransformer.applyMask(matrix, 2);

        //Verify each row has 2 spots blanked out.
        for(var i=0; i<matrix.length; i++) {
            should(countNullElementsInArray(result[i])).be.exactly(2);
        }
    });
});
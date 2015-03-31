#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> Sudoku generator for node


## Install
(note: not yet on npm)
```sh
$ npm install --save sudoku-generator
```


## Usage as library
```js
var sudoku = require('sudoku-generator');

sudoku(9, 6); ## 9x9 grid with 6 numbers removed per row
sudoku(6, 3); ## 6x6 grid with 3 numbers removed per row

//example output
{
    solution: [
        [ 3, 1, 2, 4, 5, 6 ],
        [ 6, 4, 5, 1, 2, 3 ],
        [ 1, 5, 6, 2, 3, 4 ],
        [ 4, 2, 3, 5, 6, 1 ],
        [ 2, 6, 1, 3, 4, 5 ],
        [ 5, 3, 4, 6, 1, 2 ]
    ],
    size:6,
    sectionWidth:3,
    sectionHeight:2,
    puzzle: [
        [ 3, null, 2, null, null, 6 ],
        [ null, 4, 5, 1, null, null ],
        [ null, null, null, 2, 3, 4 ],
        [ 4, 2, null, null, 6, null ],
        [ null, null, null, 3, 4, 5 ],
        [ null, 3, 4, 6, null, null ]
    ]
}
```
## Usage as command line (use --help to show options)

requires:
    NodeJS - https://nodejs.org/
    Grunt - https://github.com/gruntjs/grunt-cli

```sh
    $ ./sudoku-generator.js 6 --show-solution


      [[_ _ 6 _ 3 _]
       [2 _ _ 5 _ _]
       [6 _ _ 3 _ _]
       [3 _ 4 _ _ _]
       [4 _ _ _ _ 6]
       [_ 6 _ _ 5 _]]

      [[5 4 6 2 3 1]
       [2 1 3 5 6 4]
       [6 5 1 3 4 2]
       [3 2 4 6 1 5]
       [4 3 5 1 2 6]
       [1 6 2 4 5 3]]
```

## Dev Notes
```sh
    npm install  # install dependencies

    grunt test # run jslint and unit tests

    grunt coverage # run coverage report

    grunt watch # watches files and runs unit tests on changed files.
```

Unit test and coverage tests are wired up to TravisCI and run on every push.


## License

MIT © [David Lai](http://github.com/dlai0001)


[npm-image]: https://badge.fury.io/js/sudoku-generator.svg
[npm-url]: https://npmjs.org/package/sudoku-generator
[travis-image]: https://travis-ci.org/dlai0001/sudoku-generator.svg?branch=master
[travis-url]: https://travis-ci.org/dlai0001/sudoku-generator
[daviddm-image]: https://david-dm.org/dlai0001/sudoku-generator.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/dlai0001/sudoku-generator

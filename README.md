#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> Sudoku generator for node


## Install
(note: not yet on npm)
```sh
$ npm install --save sudoku-generator
```


## Usage
```js
var sudoku = require('sudoku-generator');

sudoku(9); ## 9x9 grid
sudoku(6); ## 6x6 grid

```

```sh
$ sudoku-generator --help
```

## Dev Notes
```sh
    npm install  # install dependencies

    grunt test # run jslint and unit tests

    grunt coverage # run coverage report

    grunt watch # watches files and runs unit tests on changed files.
```

## License

MIT © [David Lai](http://github.com/dlai0001)


[npm-image]: https://badge.fury.io/js/sudoku-generator.svg
[npm-url]: https://npmjs.org/package/sudoku-generator
[travis-image]: https://travis-ci.org/dlai0001/sudoku-generator.svg?branch=master
[travis-url]: https://travis-ci.org/dlai0001/sudoku-generator
[daviddm-image]: https://david-dm.org/dlai0001/sudoku-generator.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/dlai0001/sudoku-generator

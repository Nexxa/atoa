# atoa [![Build Status](https://travis-ci.org/Nexxa/atoa.svg?branch=master)](https://travis-ci.org/Nexxa/atoa)

Converts javascript "arguments" object into array.

Instead of the using the widespread `Array.prototype.slice` method, it copies the `arguments` items into a real array for better optimization, as explained [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) (look at the **Important** alert) and [here](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments).

## Contribution

Fork it and start to edit.

Testing is made with [TAPE](https://github.com/substack/tape) and [tap-spec](https://github.com/scottcorgan/tap-spec) reporter.

Continuous integration courtesy of [Travis CI](https://travis-ci.org/).

## Reference

- [MDN Arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
- [Optimization Killers](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments)

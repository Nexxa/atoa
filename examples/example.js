/**
 * @file atoa examples
 * @author StefanoMagrasi <stefano.magrassi@gmail.com>
 */

var atoa = require('../index.js');

// Run examples
example('a', 'b', 1, false, fn);
example2('a', 'b', 1, false, fn);
example3('a');

/**
 * Defines example - arguments to array.
 * @return {undefined}
 */
function example() {
  console.log('arguments to array');
  console.log(atoa(arguments));
}

/**
 * Defines example 2 - arguments to array at starting point.
 * @return {undefined}
 */
function example2() {
  console.log('arguments to array at starting point');
  console.log(atoa(arguments, 2));
}

/**
 * Defines example 3 - starting point is greater then numbers of parameters.
 * @return {undefined}
 */
function example3() {
  console.log('starting point is greater then numbers of parameters');
  console.log(atoa(arguments, 2));
}

/**
 * Defines test function.
 * @return {string}
 */
function fn() {
  return 'fn';
}

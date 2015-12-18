/**
 * @file Arguments object to array
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 * @license MIT
 */

/**
 * Converts "arguments" object into array.
 * @see https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
 * @param  {object} args  - The "arguments" object
 * @param  {number} start - Start index (zero based)
 * @return {array}
 */
module.exports = function(args, start) {
  start = start || 0;

  var l = args.length - start;

  if (l <= 0) {
    return [];
  }

  var a = new Array(l);
  var i;

  for (i = 0; i < l; i++) {
    a[i] = args[i + start];
  }

  return a;
};

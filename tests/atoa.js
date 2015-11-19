/**
 * @file Test for atoa
 * @author StefanoMagrasi <stefano.magrassi@gmail.com>
 */

var test = require('tape');
var atoa = require('../index.js');

test('Arguments into array', function(assert) {
  var testMe = function() {
    return atoa(arguments);
  };
  
  var actual   = testMe('a', 'b', 1, false);
  var expected = ['a', 'b', 1, false];
  var msg      = 'should convert the arguments object into an array of 4 elements';
  
  assert.deepEqual(actual, expected, msg);
  
  assert.end();
});

test('Arguments into array from starting index', function(assert) {
  function testMe() {
    return atoa(arguments, 2);
  }
  
  var actual1   = function() { testMe('a'); };
  var expected1 = null;
  var msg1      = 'should does not throw';
  
  assert.doesNotThrow(actual1, expected1, msg1);
  
  var actual2   = testMe('a', 'b', 1, false);
  var expected2 = [1, false];
  var msg2      = 'should convert from starting point the arguments object into an array of 2 elements';
  
  assert.deepEqual(actual2, expected2, msg2);
  
  var actual3   = testMe('a');
  var expected3 = [];
  var msg3      = 'should returns an empty array because the begin is greater than the number of arguments';
  
  assert.deepEqual(actual3, expected3, msg3);
  
  assert.end();
});

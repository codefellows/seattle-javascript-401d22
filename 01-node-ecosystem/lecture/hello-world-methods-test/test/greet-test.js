'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function() {
  describe('#sayHey', function() {
    it('it should return hey brian', function() {
      // create assertion tests here
      var result = greet.sayHey('brian');
      assert.ok(result === 'hey brian', 'not equal to hey brian');
    });
  
    it('should throw a missing name error', function() {
      assert.throws(function() {
        greet.sayHey();
      }, 'error not thrown');
    });
  });

  describe('#sayBye', function() {
    it('should return see ya later', function() {
      var bye = greet.sayBye();
      assert.ok(bye === 'see ya later', 'not equal to see ya later');
    });
  });
});

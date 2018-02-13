'use strict';

const greet = require('../lib/greet.js');
require('jest');

describe('Greet Module', function() {
  describe('#sayHey', function() {
    it('should return hey brian', function() {
      var result = greet.sayHey('brian');
      expect(result).toEqual('hey brian');
    });
  
    it('should throw a missing name error', function() {
      expect(greet.sayHey).toThrow();
      expect(greet.sayHey).toThrow('name not providedz');
    });
  });

  describe('#sayBye', function() {
    it('should return see ya later', function() {
      var bye = greet.sayBye();
      expect(bye).toEqual('see ya later');
    });
  });
});

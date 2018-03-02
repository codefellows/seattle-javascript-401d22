'use strict';

const Stack = require('../lib/stack.js');
require('jest');

describe('Stack Data Structure', function() {
  beforeEach(() => this.stack = new Stack());

  describe('default properties', () => {
    it('should create an instance of Stack', () => {
      expect(this.stack).toBeInstanceOf(Stack);
    });

    it('should have a default val of null assigned to the top', () => {
      expect(this.stack.top).toBeNull();
    });

    it('should have a default val of 0 assigned to the size', () => {
      expect(this.stack.size).toEqual(0);
    });

    it('should have a default val of 1048 assigned to the maxSize', () => {
      expect(this.stack.maxSize).toEqual(1048);
    });
  });

  describe('#push', () => {
    it('should push an item to the stack', () => {
      this.stack.push(1);
      expect(this.stack.top.val).toEqual(1);
    });
  });

  describe('#pop', () => {
    it('should pop an item off the stack', () => {
      this.stack.push(1);
      expect(this.stack.top.val).toEqual(1);
      expect(this.stack.pop().val).toEqual(1);
    });
  });

  describe('#peek', () => {
    it('should return the top of the stack', () => {
      expect(this.stack.top).toBeNull();
      this.stack.push(1);
      expect(this.stack.peek().val).toEqual(1);
    });
  });
});

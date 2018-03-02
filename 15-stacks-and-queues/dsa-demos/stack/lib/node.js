'use strict';

module.exports = class {
  constructor(val) {
    if (!val) return new Error('value not provided');
    this.val = val;
    this.next = null;
  }
}

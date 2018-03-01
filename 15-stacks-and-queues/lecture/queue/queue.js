'use strict';

class Queue {
  constructor() {
    this.next = null;
    this.length = 0;  
  }

  enqueue(value) {
    this[this.length] = value;
    if (!this.next) this.next = 0;
    this.length++;
  }
}

var queue = new Queue();

queue.enqueue('first');
queue.enqueue('second');
queue.enqueue('third');

console.log('new queue:', queue);
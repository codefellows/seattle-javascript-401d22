'use strict';

class Queue {
  constructor() {
    this.next = null;
    this.length = 0;
  }

  enqueue(val) {
    this[this.length] = val;
    if (!this.next) this.next = 0;
    this.length++;
  }
}

let queue = new Queue();

queue.enqueue('first');
queue.enqueue('second');
queue.enqueue('third');
queue.enqueue('fourth');
queue.enqueue('fifth');

console.log('my cool queue:', queue);

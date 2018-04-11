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

let myQueue = new Queue();

myQueue.enqueue('item 1');
myQueue.enqueue('item 2');
myQueue.enqueue('item 3');

console.log(JSON.stringify(myQueue, null, 2));

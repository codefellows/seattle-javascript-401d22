'use strict';

class Node {
  constructor(val) {
    if (!val) throw new Error('no val');
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(val) {
    let node = new Node(val);
    
    node.next = this.top;
    this.top = node;
    this.size++;
    return this.top;
  }

  peek() {
    return this.top;
  }
}

const myStack = new Stack();

myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.push(1);

console.log(JSON.stringify(myStack, null, 2));

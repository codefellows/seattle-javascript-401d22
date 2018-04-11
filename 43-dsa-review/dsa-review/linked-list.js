'use strict';

class ListNode {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.root = null;
  }

  prepend(val) {
    let newNode = new ListNode(val);
    newNode.next = this.root;
    this.root = newNode;
  }
}

let myList = new LinkedList();
myList.prepend(20);
myList.prepend(30);
myList.prepend(40);

console.log(JSON.stringify(myList, null, 2));

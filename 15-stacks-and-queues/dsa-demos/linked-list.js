'use strict';

function Node(val) {
  this.next = null;
  this.val = val;
}

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.prepend = function(val) {
  let node = new Node(val);

  if (!this.head) {
    this.head = node;
    return this;
  }

  node.next = this.head;
  this.head = node;
  return this;
}

LinkedList.prototype.append = function(val) {
  if (!val) return;

  let node = new Node(val);
  let last = null;

  if (!this.head) {
    this.head = node;
    return this;
  }

  _setLastNode(this.head);
  last.next = node;
  return this;

  function _setLastNode(node) {
    if (!node) return;
    last = node;
    _setLastNode(node.next);
  }
}

const ll = new LinkedList();

ll.prepend(3);
ll.prepend(2);
ll.prepend(1);

ll.append(4);
ll.append(5);
ll.append(6);
ll.append(7);

console.log('linked list:', JSON.stringify(ll, null, 2));

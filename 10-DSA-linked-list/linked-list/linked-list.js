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

  removeFirst() {
    this.root = this.root.next;
  }

  removeLast() {
    let current = this.root;
    while (current.next.next != null) {
      current = current.next;
    }
    current.next = null;
  }

  toString() {
    // HOW TO iterate over a linked list
    let result = ''
    let current = this.root;
    while (current != null) {
      result += current.data + ' -> '
      current = current.next;
    }
    result += 'null'
    return result;
  }
}

module.exports = {
  'ListNode': ListNode,
  'LinkedList': LinkedList
}

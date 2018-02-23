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

  // O(1)
  prepend(val) {
    let newNode = new ListNode(val);
    newNode.next = this.root;
    this.root = newNode;
  }

  // O(N)
  get(index) {
    let count = 0;
    let current = this.root;
    while (current != null) {
      if (count === index) {
        return current.data;
      }
      current = current.next;
      count++;
    }
    return undefined;
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

  removeAtIndex(index) {
    

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

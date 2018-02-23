const {ListNode, LinkedList} = require('./linked-list');

let list = new LinkedList();
list.prepend(88)
list.prepend(64)
list.prepend(42)
list.prepend(12)
console.log(list.toString())

list.removeFirst();
console.log(list.toString())

list.removeLast();
console.log(list.toString())
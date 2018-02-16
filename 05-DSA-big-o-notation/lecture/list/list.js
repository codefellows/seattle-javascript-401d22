'use strict';

function List() {
  for (let idx in arguments) {
    this[idx] = arguments[idx];
  }
  this.length = arguments.length;
}

List.prototype.copy = function() {
  let copy = new List();
  for (let prop in this) {
    copy[prop] = this[prop];
  }
  return copy;
}

List.prototype.push = function(value) {
  let copy = this.copy();
  copy[copy.length++] = value;
  return copy;
}

var list = new List(10, 20, 30);
var newlist = list.copy();
var pushedList = list.push(40);

console.log('our new list:', newlist);
console.log('pushed list:', pushedList);

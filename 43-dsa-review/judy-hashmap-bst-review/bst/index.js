'use strict';

class TreeNode {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor(root=null) {
    this.root = root;
  }
  /*
  10
 5   12

  */

  breadthFirst(callback) {
    let q = [this.root];
    let current;
    /*
    let q = [];
    q.push(this.root)
    */
    while (q.length) {
      current = q.pop();
      //logic can go directly here
      callback(current);
      if (current.left) q.unshift(current.left);
      if (current.right) q.unshift(current.right);
    }
  }
}
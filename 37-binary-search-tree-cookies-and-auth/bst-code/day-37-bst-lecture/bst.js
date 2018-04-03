'use strict';

module.exports = exports = {};

exports.TreeNode = class  {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

exports.BST = class {
  constructor(root=null) {
    this.root = root;
  }

  insert(nodeToInsert) {
    if (this.root === null) {
      this.root = nodeToInsert;
    } else {
      this._insert(this.root, nodeToInsert);
    }
  }

  _insert(root, nodeToInsert) {
    if (nodeToInsert.value < root.value) {
      if (!root.left) {
        root.left = nodeToInsert;
      } else {
        this._insert(root.left, nodeToInsert);
      }
    } else {
      if (!root.right) {
        root.right = nodeToInsert;
      } else {
        this._insert(root.right, nodeToInsert);
      }
    }
  }

  //root, left, right
  preOrder(callback) {
    _traverse(this.root);
    function _traverse(node) {
      callback(node);
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    }
  }

  //left, root, right
  inOrder(callback) {
    _traverse(this.root);
    function _traverse(node) {
      if (node.left) _traverse(node.left);
      callback(node);
      if (node.right) _traverse(node.right);
    }
  }

  //left, right, root
  postOrder(callback) {
    _traverse(this.root);
    function _traverse(node) {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      callback(node);
    }
  }

  breadthFirst(callback) {
    //This is ES6 syntax that puts this.root into an array and is equal to this:
    // let q = [];
    // q.push(this.root);
    let q = [this.root];
    let current;
    while(q.length > 0) {
      current = q.pop(); //0
      callback(current);
      if (current.left) q.unshift(current.left);//q now has length of 1
      if (current.right) q.unshift(current.right); //q now has length 2
    }
  }
}
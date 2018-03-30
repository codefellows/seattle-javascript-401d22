const util = require('util');

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
      if (!this.root.right) {
        root.right = nodeToInsert;
      } else {
        this._insert(root.right, nodeToInsert);
      }
    }
  }
}

let nums = [5, 3, 4, 6];
let bst = new BST();

for (let i of nums) {
  bst.insert(new TreeNode(i));
}

// console.log(bst);
console.log(util.inspect(bst, {showHidden: true, depth: null}))
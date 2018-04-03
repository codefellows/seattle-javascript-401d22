'use strict';

const util = require('util');
const BST = require('../bst').BST;
const TreeNode = require('../bst').TreeNode;
require('jest');

beforeEach(() => {
  const nums = [5, 3, 4, 6];
  this.bst = new BST();
  for (let i of nums) {
    this.bst.insert(new TreeNode(i));
  }
})

afterEach(() => {
  delete this.bst;
})


describe('testing BST insertion is working', () => {
  it('should show a BST with root 5', () => {
    expect(this.bst.root.value).toEqual(5);
  })
  it('should show that the root\'s left is 3', () => {
    expect(this.bst.root.left.value).toEqual(3);
  })
  it('should show that new node 10 was inserted to the right of 6', () => {
    this.bst.insert(new TreeNode(10))
    expect(this.bst.root.right.right.value).toEqual(10);
  })
})

describe('testing preOrder traversal', () => {
  //Pre-order: Root, left, right
  it('should return array with 5, 3, 4, 6 for pre-order traversal', () => {
    let nodes = [];
    let compare = [5, 3, 4, 6];
    this.bst.preOrder(node => {
      nodes.push(node.value);
    })
    expect(nodes).toMatchObject(compare);
  })
})

describe('testing inOrder traversal', () => {
  it('should return array of 3, 4, 5, 6', () => {
    let nodes = [];
    let compare = [3, 4, 5, 6];
    this.bst.inOrder(node => {
      nodes.push(node.value);
    })
    expect(nodes).toMatchObject(compare);
  })
})

describe('testing post-Order traversal', () => {
  it('should return array of [4, 3, 6, 5]', () => {
    let nodes = [];
    let compare = [4, 3, 6, 5];
    this.bst.postOrder(node => {
      nodes.push(node.value);
    })
    expect(nodes).toMatchObject(compare);
  })
})

describe('testing breadth-first traversal', () => {
  it('should print out [5, 3, 6, 4]', () => {
    let nodes = [];
    let compare = [5, 3, 6, 4];
    this.bst.breadthFirst(node => {
      nodes.push(node.value);
    })
    expect(nodes).toMatchObject(compare);
  })
}) 
'use strict';

const LinkedList = require('../linked-list/index');

module.exports = class HashTable {
  constructor(capacity = 20) {
    this._capacity = capacity;
    this._buckets = new Array(capacity);
  }

  _generateHash(key) {
    //"Brian"
    if (typeof key !== 'string') throw new TypeError('HASHTABLE ERROR: key should be a string');
    let hash = 0;

    for (let i in key) {
       hash += key.charCodeAt(i);
    }
    // x % y => some number between 0 and (y -1);
    return hash % this._capacity; //For capacity of 20, we get 0-19
  }

  set(key, htValue) {
    let hash = this._generateHash(key);

    //if no record in the table
    if (!this._buckets[hash]) {
      this._buckets[hash] = new LinkedList( { key, htValue });
      return this;
    }

    //if record is in table, assume we are updating it
    let node = this._buckets[hash].find(node => node.value.key === key);

    if (node) {
      node.value.htValue = htValue;
      return this;
    }

    //if there is a collision
    this._buckets[hash].append(new LinkedList( { key, htValue }));
    return this;
  }

  get(key) {
    let hash = this._generateHash(key);
    let error = new Error(`No entry for ${key}`);
    if(!this._buckets[hash]) {
      return error;
    }

    let node = this._buckets[hash].find(node => node.value.key === key);
    if (node) return node.value.htValue;
    return error;
  }

  delete(key) {
    let hash = this._generateHash(key); // => some random number between 0-19
    let error = new Error(`No entry at ${key}`);

    if (!this._buckets[hash]) {
      return error;
    }

    let node = this._buckets[hash].find(node => node.value.key === key);

    if (node) {
      this._buckets[hash] = this._buckets[hash].remove(node);
      console.log('Succesfully removed');
      return 'Successfully removed';
    }
    return error;
  }
}
  
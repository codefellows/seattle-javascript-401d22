'use strict';

// const a = [3, 3, 3, 3, 4, 4, 4, 1, 10, 12];
// //Count how many times each integer appears in the array;
// let dict = a.reduce((acc, cur) => {
//   if (!acc[cur]) {
//     acc[cur] = 1;
//   } else {
//     acc[cur]++;
//   }
//   return acc;
// }, {})

// let dict = {
//   '3': 4,
//   '4': 3,
// }



//Import in your own Linked List module

class Hashtable {
  constructor(capacity = 20) {
    this._capacity = capacity;
    this._buckets = new Array(capacity);
  }

  _generateHash(key) {
    if (typeof key !== 'string') throw new Error('HASH TABLE ERROR: key should be a string');
    let hash = 0;

    //key = "Brian";
    // key[0] = "B"
    for (let i in key) {
      hash += key.charCodeAt(i);
    };

    //for any # x, x % y => some # between 0 - (y -1);
    return hash % this._capacity; //0-19
  }

  set(key, htValue) {
    let hash = this._generateHash(key);

    if (!this._buckets[hash]) {
      // this._buckets[hash] = YOUR OWN LL DATA STRUCTOR OR ANY DATA STRUCTURE YOU WANT
      return this;
    } 

    //let node = your own logic to filter out the correct node in Linked List

    /* updating if record exists
    if (node) {
      node.value.htValue = htValue;
    }
    */

    //handling collision
    //whatever logic you need to append new node to Linked List or other collision data structure
    //return this;
  }
}
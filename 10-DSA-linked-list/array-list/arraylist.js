class ArrayList {
  constructor(capacity) {
    this.data = [];
    this.numElements = 0;
    for (let i = 0; i < capacity; i++) {
      this.data[i] = null;
    }
  }

  // O(N)
  prepend(value) {
    this.insert(value, 0);
  }

  // O(1)
  get(index) {
    return this.data[index];
  }

  append(val) {
    this.data[this.numElements] = val;
    this.numElements++;
  }

  insert(val, index) {
    // numElements: 2
    //  0   1   2     3
    // [12, 48, null, null]
    for (let i = this.numElements; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = val;
    this.numElements++;
  }

  removeAtIndex(index) {
    this.data[index] = null;
    for (let i = index; i < this.data.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.numElements--;
  }

  toString() {
    let result = '[';
    for (let i = 0; i < this.numElements; i++) {
      result += this.data[i] + ', ';
    }
    return result + ']';
  }
}

module.exports = ArrayList;
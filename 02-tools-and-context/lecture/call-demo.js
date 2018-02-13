'use strict';

let person = {
  name: 'brian',
  age: 33,
  speak: function() {
    return `${this.name} is ${this.age}`
  }
}

console.log('original person:', person.speak());
console.log('new person:', person.speak.call({ name: 'john', age: 44 }));



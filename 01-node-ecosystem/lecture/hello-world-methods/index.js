'use strict';

const greet = require('./lib/greet.js');

console.log('global', global);

greet.sayHey();
greet.sayBye();

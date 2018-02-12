'use strict';

module.exports = exports = {};

exports.sayHey = function(name) {
  if (!name) throw new Error('no name provided');
  console.log(`hey ${name}`);
}

exports.sayBye = function() {
  console.log('see ya later');
}

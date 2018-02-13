'use strict';

function map(arr, callback) {
  if (!arr) throw new Error('array not provided');
  return Array.prototype.map.call(arr, callback);
}

map([1, 2, 3, 4], function(n) {
  console.log('map:', n * 2);
});

function filter(arr, callback) {
  if (!arr) throw new Error('array not provided');
  return Array.prototype.filter.call(arr, callback);
}

filter([1, 2, 3, 4], function(n) {
  return n !== 2;
});

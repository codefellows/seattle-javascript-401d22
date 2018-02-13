'use strict';

var nums = [23, 4, 55, 62, 9, 12, 36, 97, 87, 65];
var newNums = [7, 6, 4, 55, 42, 23, 8];

function stats(arr) {
  return {
    min: Math.min.apply(null, arr),
    max: Math.max.apply(null, arr),
    avg: arr.reduce((a, b) => a + b) / arr.length
  }
}

console.log('our stats:', stats(nums))
console.log('our stats again:', stats(newNums));

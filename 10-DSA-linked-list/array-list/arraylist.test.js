const ArrayList = require('./arraylist');

let l1 = new ArrayList(10);
console.log('PERCEIVED', l1.toString())
console.log('   ACTUAL', l1.data)
l1.append(42);
l1.append(54);
l1.append(87);
console.log('PERCEIVED', l1.toString())
console.log('   ACTUAL', l1.data)
l1.insert(12, 0);
console.log('PERCEIVED', l1.toString())
console.log('   ACTUAL', l1.data)
l1.removeAtIndex(2);
console.log('PERCEIVED', l1.toString())
console.log('   ACTUAL', l1.data)
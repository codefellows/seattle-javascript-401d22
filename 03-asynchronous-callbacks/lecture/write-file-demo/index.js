'use strict';

const fs = require('fs');

console.log('absolute path:', __dirname);

fs.readFile(`${__dirname}/data/original.txt`, function(err, data) {
  if (err) throw err;
  console.log('content of original.txt:', data.toString());

  var str = data.toString();
  var split = str.split(' ')[0];
  var newData = new Buffer(split);

  fs.writeFile(`${__dirname}/data/new.txt`, newData, function(err, data) {
    if (err) throw err;
    console.log('file created!');
  });
});

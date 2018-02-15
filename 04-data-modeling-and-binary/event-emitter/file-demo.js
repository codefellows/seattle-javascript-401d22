'use strict';

const fs = require('fs');
const EE = require('events');
const ee = new EE();

const files = ['one.txt', 'two.txt', 'three.txt'];

ee.on('filedone', function(data) {
  if (data) console.log('our data:', data.toString());
  if (files.length === 0) return;

  fs.readFile(files.pop(), function(err, data) {
    if (err) return console.error(err);
    ee.emit('filedone', data);
  });
});

ee.emit('filedone');

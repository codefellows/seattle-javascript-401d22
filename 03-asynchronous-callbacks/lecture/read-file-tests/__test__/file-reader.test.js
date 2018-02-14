'use strict';

const fileReader = require('../lib/file-reader.js');
require('jest');

describe('File Reader Module', function() {
  describe('with an improper file path', function() {
    it('should return an error', function() {
      fileReader(`${__dirname}/not-a-file.txt`, function(err) {
        expect(err).toBeTruthy();
        expect(typeof err).toBe('object');
        expect(err.code).toBe('ENOENT');
      });
    });
  });

  describe('with a proper file path', function() {
    it('should return the content of our file', function() {
      fileReader(`${__dirname}/../data/data.txt`, function(err, data) {
        expect(err).toBe(null);
        expect(typeof data).toBe('string');
        expect(data).toEqual('i like reading files and stuff and things, bruh');
      });
    });
  });
});


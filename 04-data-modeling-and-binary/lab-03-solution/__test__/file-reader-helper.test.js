'use strict';

const readFileHelper = require('../lib/read-file-helper.js');
require('jest');

describe('Read File Helper Module', function() {
  describe('with improper file paths', function() {
    it('should return an error', function(done) {
      readFileHelper([`${__dirname}/dont-exist.txt`], function(err) {
        expect(err).toBeTruthy();
        expect(err.code).toEqual('ENOENT');
        done();
      });
    });
  });

  describe('with proper file paths', function() {
    beforeAll((done) => {
      this.paths = [
        `${__dirname}/../data/one.txt`,
        `${__dirname}/../data/two.txt`,
        `${__dirname}/../data/three.txt`
      ];
      done();
    });

    it('should have the correct order of hex strings', () => {
      var expectedResult = [ '736f6d652072616e', '736f6d652072616e', '736f6d652072616e' ];

      readFileHelper(this.paths, function(err, data) {
        console.log('data array:', data);
        expect(err).toEqual(null);
        expect(data[0]).toEqual(expectedResult[0]);
        expect(data[1]).toEqual(expectedResult[1]);
        expect(data[2]).toEqual(expectedResult[3]);
      });
    });
  });
});

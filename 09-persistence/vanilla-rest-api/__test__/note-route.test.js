'use strict';

const request = require('superagent');
require('jest');
require('../server.js');

describe('Note Routes', function() {
  var note = null;

  describe('POST: /api/note', function() {
    it('should return a note', function(done) {
      request.post('localhost:3000/api/note')
      .send({ name: 'test name', content: 'test content' })
      .end((err, res) => {
        if (err) return done(err);
        note = JSON.parse(res.text);
        console.log('res', res);
        console.log('res text', res.text);
        console.log('note', note);
        expect(res.status).toEqual(200);
        expect(note.name).toEqual('test name');
        expect(note.content).toEqual('test content');
        done();
      });
    });
  });

  describe('GET: /api/note', function() {
    it('should return a note', function(done) {
      request.get(`localhost:3000/api/note?id=${note.id}`)
      .end((err, res) => {
        if (err) return done(err);
        note = JSON.parse(res.text);
        expect(res.status).toEqual(200);
        expect(note.name).toEqual('test name');
        expect(note.content).toEqual('test content');
        done();
      });
    });
  });
});

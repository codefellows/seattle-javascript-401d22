'use strict';

const request = require('superagent');
const List = require('../model/list.js');
const Note = require('../model/note.js');
const serverToggle = require('../lib/server-toggle.js');
const server = require('../server.js');
const PORT = process.env.PORT || 3000;

require('jest');

const url = `http://localhost:${PORT}`;

const exampleNote = {
  name: 'test note',
  content: 'test note content'
}

const exampleList = {
  name: 'example list',
  timestamp: new Date()
}

describe('Note Routes', function() {
  beforeAll( done => {
    serverToggle.serverOn(server, done);
  });

  afterAll( done => {
    serverToggle.serverOff(server, done);
  });

  describe('POST: /api/list/:listID/note', function() {
    describe('with a valid list id and note body', () => {
      beforeEach( done => {
        new List(exampleList).save()
        .then( list => {
          this.tempList = list;
          done();
        })
        .catch(done);
      });

      afterEach( done => {
        Promise.all([
          List.remove({}),
          Note.remove({})
        ])
        .then( () => done())
        .catch(done);
      });

      it('should return a note', done => {
        request.post(`${url}/api/list/${this.tempList._id}/note`)
        .send(exampleNote)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body.name).toEqual(exampleNote.name);
          expect(res.body.listID).toEqual(this.tempList._id.toString());
          done();
        });
      });
    });
  });
});

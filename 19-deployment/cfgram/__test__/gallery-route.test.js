'use strict';

const request = require('superagent');
const mongoose = require('mongoose');
const server = require('../server.js');
const serverToggle = require('../lib/server-toggle.js');

const User = require('../model/user.js');
const Gallery = require('../model/gallery.js');
const PORT = process.env.PORT || 3000;

require('jest');

const url = `http://localhost:${PORT}`;

const exampleUser = {
  username: 'exampleuser',
  password: '1234',
  email: 'exampleuser@test.com'
}

const exampleGallery = {
  name: 'test gallery',
  desc: 'test gallery description'
}

describe('Gallery Routes', function() {
  beforeAll( done => {
    serverToggle.serverOn(server, done);
  });

  afterAll( done => {
    serverToggle.serverOff(server, done);
  });

  afterEach( done => {
    Promise.all([
      User.remove({}),
      Gallery.remove({})
    ])
    .then( () => done())
    .catch(done);
  });

  describe('POST: /api/gallery', () => {
    beforeEach( done => {
      new User(exampleUser)
      .generatePasswordHash(exampleUser.password)
      .then( user => user.save())
      .then( user => {
        this.tempUser = user;
        return user.generateToken();
      })
      .then( token => {
        this.tempToken = token;
        done();
      })
      .catch(done);
    });

    it('should return a gallery', done => {
      request.post(`${url}/api/gallery`)
      .send(exampleGallery)
      .set({
        Authorization: `Bearer ${this.tempToken}`
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toEqual(200);
        expect(res.body.desc).toEqual(exampleGallery.desc);
        expect(res.body.name).toEqual(exampleGallery.name);
        expect(res.body.userID).toEqual(this.tempUser._id.toString());
        done();
      }); 
    });
  });

  describe('GET: /api/gallery/:galleryId', () => {
    beforeEach( done => {
      new User(exampleUser)
      .generatePasswordHash(exampleUser.password)
      .then( user => {
        this.tempUser = user;
        return user.generateToken();
      })
      .then( token => {
        this.tempToken = token;
        done();
      })
      .catch(done);
    });

    beforeEach( done => {
      exampleGallery.userID = this.tempUser._id.toString();
      new Gallery(exampleGallery).save()
      .then( gallery => {
        this.tempGallery = gallery;
        done();
      })
      .catch(done);
    });

    afterEach( () => {
      delete exampleGallery.userID
    })

    it('should return a gallery', done => {
      request.get(`${url}/api/gallery/${this.tempGallery._id}`)
      .set({
        Authorization: `Bearer ${this.tempToken}`
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toEqual(200);
        expect(res.body.name).toEqual(exampleGallery.name);
        expect(res.body.desc).toEqual(exampleGallery.desc);
        expect(res.body.userID).toEqual(this.tempUser._id.toString());
        done();
      });
    });
  });
});

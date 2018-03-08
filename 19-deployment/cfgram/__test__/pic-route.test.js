'use strict';

const request = require('superagent');
const debug = require('debug')('cfgram:pic-route-test');
const server = require('../server.js');
const serverToggle = require('../lib/server-toggle.js');

const Pic = require('../model/pic.js');
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
  name: 'example gallery',
  desc: 'example gallery desc'
}

const examplePic = {
  name: 'example pic',
  desc: 'example pic description',
  image: `${__dirname}/../data/tester.png`
}

describe('Pic Routes', function() {
  beforeAll( done => {
    serverToggle.serverOn(server, done);
  });
  
  afterAll( done => {
    serverToggle.serverOff(server, done);
  });

  afterEach( done => {
    Promise.all([
      Pic.remove({}),
      User.remove({}),
      Gallery.remove({})
    ])
    .then( () => done())
    .catch(done);
  });

  describe('POST: /api/gallery/:galleryID/pic', function() {
    describe('with a valid token and valid data', function() {
      beforeEach( done => {
        new User(exampleUser)
        .generatePasswordHash(exampleUser.password)
        .then( user => user.save())
        .then( user => {
          this.tempUser = user;
          return user.generateToken()
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
      
      afterEach( done => {
        delete exampleGallery.userID;
        done();
      });

      it('should return a object containing our pic url', done => {
        request.post(`${url}/api/gallery/${this.tempGallery._id}/pic`)
        .set({
          Authorization: `Bearer ${this.tempToken}`
        })
        .field('name', examplePic.name)
        .field('desc', examplePic.desc)
        .attach('image', examplePic.image)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).toEqual(200);
          expect(res.body.name).toEqual(examplePic.name);
          expect(res.body.desc).toEqual(examplePic.desc);
          expect(res.body.galleryID).toEqual(this.tempGallery._id.toString());
          done();
        });
      });
    });
  });
}); 

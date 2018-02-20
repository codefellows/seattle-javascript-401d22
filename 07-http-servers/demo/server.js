'use strict';

const http = require('http');
const url = require('url');
const querystring = require('querystring');
const cowsay = require('cowsay');
const parseBody = require('./lib/parse-body.js');
const PORT = process.env.PORT || 3000;

const server = http.createServer(function(req, res) {
  req.url = url.parse(req.url); 
  req.url.query = querystring.parse(req.url.query);

  if (req.method === 'GET' && req.url.pathname === '/cowsay') {
    let params = req.url.query;
    res.write(cowsay.say({ text: params.text }));
    res.end();
  }

  if (req.method === 'POST' || req.method === 'PUT') {
    parseBody(req, function(err) {
      if (err) throw new Error('error parsing request body');
      console.log('req body:', req.body);
      res.end();
    });
  }

  res.end();
});

server.listen(PORT, () => {
  console.log(`server up: ${PORT}`);
});

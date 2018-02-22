![cf](http://i.imgur.com/7v5ASc8.png) 11: Express
===

## Learning Objectives
* Students will learn about ExpressJS
* Students will be able to create RESTful HTTP servers through the use of Express

## Resources
* Skim [express api docs](http://expressjs.com/en/4x/api.html)
* Read [express routing](http://expressjs.com/en/guide/routing.html)

## Outline

### Express
ExpressJS is a lightweight framework for building web servers. It extends the NodeJS `http` module with a minimal feature set that enables developers to build powerful web applications, and fast. The ExpressJS feature set includes routing with url parameters, error handling, a static server, cookie and link helpers, convenience methods for sending `json` and `jsonp`, location and redirect management, request parsing, server side rendering, and a framework for creating robust middleware.

### Route Methods
ExpressJS provides us with simple to use route methods and route parameters.  These are similiar to those that you may have seen used in `page.js` for client side routing.  Here are a few example route methods and their associated route parameters.

```javascript
const express = require('express');
const app = express();

// get notes from the /api/note endpoint
app.get('/api/note', function(req, res, next) { ... });

// get a specific note from the /api/note/:id endpoint
app.get('/api/note/:id', function(req, res, next) { ... });

// post a new note to the /api/note endpoint
app.post('/api/note', function(req, res, next) { ... });
```

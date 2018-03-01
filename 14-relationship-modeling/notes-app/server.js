'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const debug = require('debug')('note:server');
const listRouter = require('./route/list-route.js');
const noteRouter = require('./route/note-route.js');
const errors = require('./lib/error-middleware.js');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb://localhost/notesdb';

mongoose.connect(MONGODB_URI);

app.use(cors());
app.use(morgan('dev'));

app.use(listRouter);
app.use(noteRouter);
app.use(errors);

const server = module.exports = app.listen(PORT, () => {
  debug(`server up: ${PORT}`);
});

server.isRunning = true;

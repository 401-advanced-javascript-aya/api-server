'use strict'

const server = require('./lib/server.js');
const mongoose = require('mongoose');
require('dotenv').config()


const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb+srv://aya93:good401@api-server-lab08.c6hvx.mongodb.net/class-08?retryWrites=true&w=majority'

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    server.start(process.env.PORT);
  })
  .catch((err) => console.error(err.message));
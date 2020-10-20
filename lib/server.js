'use strict'

const express = require('express');
const morgan = require('morgan');
const app = express();
const timestamp = require('./middleware/timestamp');
const logger = require('./middleware/logger');
const error404 = require('./middleware/404');
const error500 = require('./middleware/500');
const ctgRouter = require('../routes/categories');
const prodRouter = require('../routes/products');


const cors = require('cors');


app.use(express.json());
app.use('/', ctgRouter);
app.use('/', prodRouter);

app.use(timestamp);
app.use(logger);

app.get('/', logger, (req, res) => {
  res.send('Welcome!');    
});
 
  
  app.get('/bad', (req, res) => {
    throw new Error('a test error');
  });
  app.use(error500);
  app.use('*', error404);
  
  
  
  module.exports = {
    server: app,
    start: (port) => {
      app.listen(port, () => {
        const PORT = port || process.env.PORT || 3000;
        console.log(`up and running on port ${PORT}`);
      });
    },
  }
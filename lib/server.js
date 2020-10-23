'use strict';

const express = require('express');
const app = express();
const timestamp = require('./middleware/timestamp');
const logger = require('./middleware/logger');
const error404 = require('./middleware/404');
const error500 = require('./middleware/500');


const cors = require('cors');


app.use(express.json());
app.use(timestamp);
app.use(logger);
app.use(cors);

app.get('/', logger, (req, res) => {
  res.send('Welcome!');
});

let prodArr = [];
app.post('/products', (req, res) => {
  const { name, category, display_name, description } = req.body;
  const record = { name, category, display_name, description };
  record.id = prodArr.length + 1;
  prodArr.push(record);
  console.log('prdArr', prodArr);
  res.status(201).json(record);
});
app.get('/products', (req, res) => {
  const count = prodArr.length;
  const results = prodArr;
  console.log('prdArr inside get', prodArr);
  res.json({ count, results });
});
app.put('/products/:id', (req, res) => {
  // replace one products by id
  let idToUpdate = req.params.id;
  console.log('.....................', req.body);
  let { category, name, display_name, description } = req.body;
  let updatedProduct = {
    category,
    name,
    display_name,
    description,
    idToUpdate,
  };
  prodArr = prodArr.map((record) =>
    record.id === parseInt(idToUpdate) ? updatedProduct : record,
  );
  res.json(updatedProduct);
});
app.delete('/products/:id', (req, res) => {
  let id = req.params.id;
  prodArr = prodArr.filter((el) =>
    el.id !== parseInt(id),
  );

  res.json({});
});

//////////////////////////////////////////categories////////////////////////////////////////
let ctgArray = [];
app.post('/categories', (req, res) => {
  const {name, display_name, description } = req.body;
  const record = { name, display_name, description };
  record.id = ctgArray.length + 1;
  ctgArray.push(record);
  console.log('ctgArray', ctgArray);
  res.status(201).json(record);
});
app.get('/categories', (req, res) => {
  const count = ctgArray.length;
  const results = ctgArray;
  console.log('ctgArray inside get', ctgArray);
  res.json({ count, results });
});
app.put('/categories/:id', (req, res) => {
  // replace one categories by id
  let idToUpdate = req.params.id;
  console.log('.....................', req.body);
  let { name, display_name, description } = req.body;
  let updatedCategories = {
    name,
    display_name,
    description,
    idToUpdate,
  };
  ctgArray = ctgArray.map((record) =>
    record.id === parseInt(idToUpdate) ? updatedCategories : record,
  );
  res.json(updatedCategories);
});
app.delete('/categories/:id', (req, res) => {
  let id = req.params.id;
  ctgArray = ctgArray.filter((el) =>
    el.id !== parseInt(id),
  );

  res.json({});
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
};
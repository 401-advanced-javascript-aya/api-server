'use strict';
const express = require('express');
const productModle = require('../lib/models/products/products-collection');
const router = express.Router();

router.post('/products', (req, res, next) => {
  productModle
    .create(req.body)
    .then((data) => {
      let count = data.length;
      let results = data;
      res.status(200).json({ count, results });
    })
    .catch(next);
});
router.get('/products', (req, res, next) => {
  productModle
    .get()
    .then((data) => {
      let count = data.length;
      let results = data;
      res.status(200).json({ count, results });
    })
    .catch(next);
});
router.put('/products/:id', (req, res, next) => {
  productModle
    .update(req.params.id,req.body)
    .then((data) => {
      let count = data.length;
      let results = data;
      res.status(200).json({ count , results });
    })
    .catch(next);
});

router.patch('/products/:id', (req, res, next) => {
  productModle
    .update(req.params.id,req.body)
    .then((data) => {
      let count = data.length;
      let results = data;
      res.status(200).json({ count , results });
    })
    .catch(next);
});


router.delete('/products/:id', (req, res, next) => {
  productModle
    .delete(req.params.id)
    .then((data) => {
      let results = data;
      res.status(200).json({ results });
    })
    .catch(next);
});
module.exports = router;
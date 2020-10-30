'use strict';
const Catigory = require('../models/categories/categories-collection');
const Products = require('../models/products/products-collection');
const categoriesModle = new Catigory;
const productsModle = new Products();


module.exports = (req, res, next) => {
  const model = req.params.model;
  // console.log('__MODEL__', model);
  switch (model) {
  case 'categories':
    req.model = categoriesModle;
    break;
  case 'products':
    req.model = productsModle;
    break;
  case 'bad':
    res.status(500).json({});
    break;
  default:
    res.status(404).json({});
    return;
  }
  next();
};

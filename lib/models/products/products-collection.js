'use strict';

const prdtModel = require('./products-schema');
const Collection = require('../mongo');

class Products extends Collection {
  constructor() {
    super(prdtModel);
  }
}

module.exports = new Products();
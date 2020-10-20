'use strict';

const ctgModel = require('./ categories-schema');
const Collection = require('../mongo');

class Categories extends Collection {
  constructor() {
    super(ctgModel);
  }

}

module.exports = new Categories();
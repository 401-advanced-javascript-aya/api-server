'use strict';

const mongoose = require('mongoose');

const product = mongoose.Schema({
  name : { type: String, require: true },
  category : { type: String, require: true },
  display_name : { type: String, require: true },
  description : { type: String, require: true },
  
});

module.exports = mongoose.model('product', product);
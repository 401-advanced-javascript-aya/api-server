'use strict';

module.exports = (req, res, next) => {
  // console.log('inside timestamp');
  console.log('request', req.method, req.path, req.date);
  next();
};
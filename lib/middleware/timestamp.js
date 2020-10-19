'use strict'

module.exports = (req, res, next) => {
    console.log('inside timestamp');
    var date = new Date();
    req.date = date
    // console.log('req.body',req.date);
    next();
  };
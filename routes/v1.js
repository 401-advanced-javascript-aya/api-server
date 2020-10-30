'use strict';

const express = require('express');
const modelFinder = require('../lib/middleware/modelfinder');
const router = express.Router();
router.param('model', modelFinder);


router.post('/:model', posting);
router.get('/:model', getAll);
router.get('/:model/:id', getById);
router.put('/:model/:id', updating);
router.patch('/:model/:id', patching);
router.delete('/:model/:id', deleting);


function posting(req, res, next) {
    
  req.model.create(req.body).then((data) => {
    let count = data.length;
    let results = data;
    res.status(200).json({ count, results });
  }).catch(next);
}

function getAll(req, res, next) {
  req.model.get().then((data) => {
    let count = data.length;
    let results = data;
    res.status(200).json({ count, results });
  })
    .catch(next); /////////////////////////////
}

function getById(req, res, next) {
  req.model.get(req.params.id).then((data) => {
    let count = data.length;
    let results = data;
    res.status(200).json({ count, results });
  })
    .catch(next); /////////////////////////////
}

function updating(req, res, next) {
  req.model.update(req.params.id, req.body).then((data) => {
    let count = data.length;
    let results = data;
    res.status(200).json({ count, results });
  })
    .catch(next);
}

function patching(req, res, next) {
  req.model.update(req.params.id, req.body).then((data) => {
    let count = data.length;
    let results = data;
    res.status(200).json({ count, results });
  })
    .catch(next);
}


function deleting(req, res, next) {
  req.model.delete(req.params.id).then((data) => {
    let results = data;
    res.status(200).json({ results });
  })
    .catch(next);
}

module.exports = router;
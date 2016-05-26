'use strict';

var express = require('express');
var router = express.Router();
var Person = require('../models/person');
var Home = require('../models/home');

/*
POST, GET, PUT, PATCH, DELETE, ....
*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('hello', { title: 'Express' });
});

// http://localhost:3000/person

// GET
router.get('/person', function (req, res, next) {
  Person.getList(req.db)
    .then(rows => {
      res.send({ok: true, rows: rows})
    }, err => {
      res.send({ok: false, msg: err})
    });
});

router.get('/home', function (req, res, next) {
  Home.getList(req.db)
    .then(rows => {
      res.send({ok: true, rows: rows})
    }, err => {
      res.send({ok: false, msg: err})
    });
});

router.post('/person', function (req, res, next) {
  res.send({ok: true, msg: 'POST DATA'})
});

router.put('/person', function (req, res, next) {
  res.send({ ok: true, msg: 'PUT DATA' })
});

router.delete('/person/:id', function (req, res, next) {
  res.send({ ok: true, msg: 'DELETE DATA', param: req.params.id })
});

module.exports = router;

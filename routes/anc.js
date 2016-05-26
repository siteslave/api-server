var express = require('express');
var router = express.Router();
var Anc = require('../models/anc');

/* GET users listing. */

// /anc/list
router.get('/list', function(req, res, next) {
  var db = req.db;

  Anc.getList(db)
    .then(rows => {
      res.send({ ok: true, rows: rows })
    }, err => {
      res.send({ ok: false, msg: err })
    });

});
//   /detail/20
//   req.params.id
router.post('/search', function(req, res, next) {
  var db = req.db;
  var name = req.body.name;

  Anc.search(db, name)
    .then(rows => {
      res.send({ ok: true, rows: rows })
    }, err => {
      res.send({ ok: false, msg: err })
    });

});

module.exports = router;

var express = require('express');
var router = express.Router();
var Anc = require('../models/anc');
var moment = require('moment');

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

router.post('/history', function(req, res, next) {
  var db = req.db;
  var cid = req.body.cid;

  var hpid = [];

  Anc.getHPID(db, cid)
    .then(rows => {
      rows.forEach(v => {
        hpid.push(v.hpid);
      });

      return Anc.getANCHistory(db, hpid);
    })
    .then(rows => {
      var anc = [];
      rows.forEach(v => {
        var obj = {};
        obj.HOSPCODE = v.HOSPCODE;
        obj.GA = v.GA;
        obj.DATE_SERV =
          moment(v.DATE_SERV).format('DD/MM') + '/'  + (moment(v.DATE_SERV).get('year') + 543);
        anc.push(obj);
      });

      res.send({ok: true, rows: anc})
    }, err => {
      console.log(err);
      res.send({ ok: false, msg: err })
    });

});



module.exports = router;

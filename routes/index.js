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

router.get('/chart', function (req, res, next) {
  var data = {
    success: true,
    date_response: "2016-05-26 16:41:29",
    error: 0,
    data: [
      {
        date: "2016-05-26",
        region: "07",
        provcode: "40",
        changwatname: "ขอนแก่น",
        hcode: "11000",
        hname: "โรงพยาบาลน้ำพอง",
        cases: "14",
        opd: "14",
        ipd: "0",
        inprov: "14",
        inregion: "14"
      },
      {
        date: "2016-05-26",
        region: "07",
        provcode: "40",
        changwatname: "ขอนแก่น",
        hcode: "10999",
        hname: "โรงพยาบาลสีชมพู",
        cases: "11",
        opd: "11",
        ipd: "0",
        inprov: "11",
        inregion: "11"
      },
      {
        date: "2016-05-26",
        region: "07",
        provcode: "40",
        changwatname: "ขอนแก่น",
        hcode: "10995",
        hname: "โรงพยาบาลบ้านฝาง",
        cases: "3",
        opd: "3",
        ipd: "0",
        inprov: "3",
        inregion: "3"
      },
      {
        date: "2016-05-26",
        region: "07",
        provcode: "40",
        changwatname: "ขอนแก่น",
        hcode: "11003",
        hname: "โรงพยาบาลเปือยน้อย",
        cases: "3",
        opd: "2",
        ipd: "1",
        inprov: "3",
        inregion: "3"
      },
      {
        date: "2016-05-26",
        region: "07",
        provcode: "40",
        changwatname: "ขอนแก่น",
        hcode: "11001",
        hname: "โรงพยาบาลอุบลรัตน์",
        cases: "3",
        opd: "2",
        ipd: "1",
        inprov: "3",
        inregion: "3"
      },
      {
        date: "2016-05-26",
        region: "07",
        provcode: "40",
        changwatname: "ขอนแก่น",
        hcode: "04261",
        hname: "รพ.สต.ตำบลบ้านค้อ",
        cases: "3",
        opd: "3",
        ipd: "0",
        inprov: "3",
        inregion: "3"
      },
      {
        date: "2016-05-26",
        region: "07",
        provcode: "40",
        changwatname: "ขอนแก่น",
        hcode: "11005",
        hname: "โรงพยาบาลแวงใหญ่",
        cases: "3",
        opd: "3",
        ipd: "0",
        inprov: "3",
        inregion: "3"
      },
      {
        date: "2016-05-26",
        region: "07",
        provcode: "40",
        changwatname: "ขอนแก่น",
        hcode: "11006",
        hname: "โรงพยาบาลแวงน้อย",
        cases: "2",
        opd: "0",
        ipd: "2",
        inprov: "2",
        inregion: "2"
      },
      {
        date: "2016-05-26",
        region: "07",
        provcode: "40",
        changwatname: "ขอนแก่น",
        hcode: "12275",
        hname: "โรงพยาบาลสิรินธร(ภาคตะวันออกเฉียงเหนือ)",
        cases: "2",
        opd: "2",
        ipd: "0",
        inprov: "2",
        inregion: "2"
      },
      {
        date: "2016-05-26",
        region: "07",
        provcode: "40",
        changwatname: "ขอนแก่น",
        hcode: "10997",
        hname: "โรงพยาบาลหนองเรือ",
        cases: "1",
        opd: "1",
        ipd: "0",
        inprov: "1",
        inregion: "1"
      },
      {
        date: "2016-05-26",
        region: "07",
        provcode: "40",
        changwatname: "ขอนแก่น",
        hcode: "04447",
        hname: "รพ.สต.ตำบลนางิ้ว",
        cases: "1",
        opd: "1",
        ipd: "0",
        inprov: "1",
        inregion: "1"
      },
      {
        date: "2016-05-26",
        region: "07",
        provcode: "40",
        changwatname: "ขอนแก่น",
        hcode: "04324",
        hname: "รพ.สต.ตำบลน้ำพอง",
        cases: "1",
        opd: "1",
        ipd: "0",
        inprov: "1",
        inregion: "1"
      },
      {
        date: "2016-05-26",
        region: "07",
        provcode: "40",
        changwatname: "ขอนแก่น",
        hcode: "11008",
        hname: "โรงพยาบาลภูเวียง",
        cases: "1",
        opd: "0",
        ipd: "1",
        inprov: "1",
        inregion: "1"
      },
      {
        date: "2016-05-26",
        region: "07",
        provcode: "40",
        changwatname: "ขอนแก่น",
        hcode: "10996",
        hname: "โรงพยาบาลพระยืน",
        cases: "1",
        opd: "0",
        ipd: "1",
        inprov: "1",
        inregion: "1"
      },
      {
        date: "2016-05-26",
        region: "07",
        provcode: "40",
        changwatname: "ขอนแก่น",
        hcode: "10670",
        hname: "โรงพยาบาลขอนแก่น",
        cases: "1",
        opd: "0",
        ipd: "1",
        inprov: "1",
        inregion: "1"
      },
      {
        date: "2016-05-26",
        region: "07",
        provcode: "40",
        changwatname: "ขอนแก่น",
        hcode: "04334",
        hname: "รพ.สต.ตำบลบัวเงิน",
        cases: "1",
        opd: "1",
        ipd: "0",
        inprov: "1",
        inregion: "1"
      },
      {
        date: "2016-05-26",
        region: "07",
        provcode: "40",
        changwatname: "ขอนแก่น",
        hcode: "11010",
        hname: "โรงพยาบาลชนบท",
        cases: "1",
        opd: "0",
        ipd: "1",
        inprov: "1",
        inregion: "1"
      },
      {
        date: "2016-05-26",
        region: "07",
        provcode: "40",
        changwatname: "ขอนแก่น",
        hcode: "11007",
        hname: "โรงพยาบาลหนองสองห้อง",
        cases: "1",
        opd: "0",
        ipd: "1",
        inprov: "1",
        inregion: "1"
      },
      {
        date: "2016-05-26",
        region: "07",
        provcode: "40",
        changwatname: "ขอนแก่น",
        hcode: "15011",
        hname: "รพ.สต.บ้านแก่นเท่า",
        cases: "1",
        opd: "1",
        ipd: "0",
        inprov: "1",
        inregion: "1"
      },
      {
        date: "2016-05-26",
        region: "07",
        provcode: "40",
        changwatname: "ขอนแก่น",
        hcode: "11002",
        hname: "โรงพยาบาลบ้านไผ่",
        cases: "1",
        opd: "1",
        ipd: "0",
        inprov: "1",
        inregion: "1"
      },
      {
        date: "2016-05-26",
        region: "07",
        provcode: "44",
        changwatname: "มหาสารคาม",
        hcode: "11058",
        hname: "โรงพยาบาลวาปีปทุม",
        cases: "31",
        opd: "31",
        ipd: "0",
        inprov: "28",
        inregion: "31"
      },
      {
        date: "2016-05-26",
        region: "07",
        provcode: "44",
        changwatname: "มหาสารคาม",
        hcode: "11059",
        hname: "โรงพยาบาลนาดูน",
        cases: "15",
        opd: "15",
        ipd: "0",
        inprov: "15",
        inregion: "15"
      },
      {
        date: "2016-05-26",
        region: "07",
        provcode: "44",
        changwatname: "มหาสารคาม",
        hcode: "11052",
        hname: "โรงพยาบาลโกสุมพิสัย",
        cases: "11",
        opd: "11",
        ipd: "0",
        inprov: "11",
        inregion: "11"
      },
      {
        date: "2016-05-26",
        region: "07",
        provcode: "44",
        changwatname: "มหาสารคาม",
        hcode: "11053",
        hname: "โรงพยาบาลกันทรวิชัย",
        cases: "10",
        opd: "10",
        ipd: "0",
        inprov: "8",
        inregion: "10"
      },
      {
        date: "2016-05-26",
        region: "07",
        provcode: "44",
        changwatname: "มหาสารคาม",
        hcode: "11055",
        hname: "โรงพยาบาลบรบือ",
        cases: "8",
        opd: "8",
        ipd: "0",
        inprov: "8",
        inregion: "8"
      },
      {
        date: "2016-05-26",
        region: "07",
        provcode: "44",
        changwatname: "มหาสารคาม",
        hcode: "11060",
        hname: "โรงพยาบาลยางสีสุราช",
        cases: "7",
        opd: "7",
        ipd: "0",
        inprov: "7",
        inregion: "7"
      },
      {
        date: "2016-05-26",
        region: "07",
        provcode: "44",
        changwatname: "มหาสารคาม",
        hcode: "11051",
        hname: "โรงพยาบาลแกดำ",
        cases: "4",
        opd: "4",
        ipd: "0",
        inprov: "3",
        inregion: "4"
      },
      {
        date: "2016-05-26",
        region: "07",
        provcode: "44",
        changwatname: "มหาสารคาม",
        hcode: "11057",
        hname: "โรงพยาบาลพยัคฆภูมิพิสัย",
        cases: "2",
        opd: "2",
        ipd: "0",
        inprov: "2",
        inregion: "2"
      },
      {
        date: "2016-05-26",
        region: "07",
        provcode: "44",
        changwatname: "มหาสารคาม",
        hcode: "11056",
        hname: "โรงพยาบาลนาเชือก",
        cases: "1",
        opd: "1",
        ipd: "0",
        inprov: "1",
        inregion: "1"
      }
    ],
    client_agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36",
    client_ip: "180.183.134.128"
  };

  res.send({ ok: true, data: data });
});

module.exports = router;

var express = require('express');
var router = express.Router();

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
  res.send({ ok: true, person: [{pid: 1111, name: 'xxxxx'}]})
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

'use strict';

var Q = require('q');

module.exports = {
  getList(db) {
    var q = Q.defer();

    var sql = 'select p.CID, a.PID, a.HOSPCODE, ' +
      'p.NAME, p.LNAME, a.GRAVIDA, a.DATE_SERV ' +
      'from anc as a ' +
      'inner join person as p on ' +
      'p.HOSPCODE=a.HOSPCODE and p.PID = a.PID ' +
      'group by p.CID ' +
      'limit 20';

    db.raw(sql, [])
      .then(rows => q.resolve(rows[0]))
      .catch(err => q.reject(err));

    return q.promise;
  },

  search(db, name) {
    var q = Q.defer();

    var sql = 'select p.CID, a.PID, a.HOSPCODE, ' +
      'p.NAME, p.LNAME, a.GRAVIDA, a.DATE_SERV ' +
      'from anc as a ' +
      'inner join person as p on ' +
      'p.HOSPCODE=a.HOSPCODE and p.PID = a.PID ' +
      'WHERE p.NAME LIKE ?' +
      'group by p.CID ' +
      'limit ?';

    var _name = '%' + name + '%';

    db.raw(sql, [_name, 20])
      .then(rows => q.resolve(rows[0]))
      .catch(err => q.reject(err));

    return q.promise;
  },

  getHPID(db, cid) {
    var q = Q.defer();
    db('person')
      .select(db.raw('concat(HOSPCODE, PID) as hpid'))
      .where('CID', cid)
      .then(rows => q.resolve(rows))
      .catch(err => q.reject(err));

    return q.promise;
  },

  getANCHistory(db, hpid) {
    var q = Q.defer();

    /*
     SELECT a.*
     FROM anc as a
     WHERE concat(a.HOSPCODE, a.PID) IN (hpid)
     LIMIT 20

    */

    db('anc as a')
      .select()
      .whereIn(db.raw('concat(a.HOSPCODE, a.PID)'), hpid)
      .limit(20)
      .then(rows => q.resolve(rows))
      .catch(err => q.reject(err));

    return q.promise;
  }
};
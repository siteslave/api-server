'use strict';

var Q = require('q');

module.exports = {
  getList(db) {
    var q = Q.defer();

    var sql = 'select a.PID, a.HOSPCODE, ' +
      'p.NAME, p.LNAME, a.GRAVIDA ' +
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

    var sql = 'select a.PID, a.HOSPCODE, ' +
      'p.NAME, p.LNAME, a.GRAVIDA ' +
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
  }
};
'use strict';

var Q = require('q');

module.exports = {
  getList(db) {
    var q = Q.defer();
    // SELECT * FROM person LIMIT 10;
    db('person')
      .select()
      .limit(10)
      .then(rows => q.resolve(rows))
      .catch(err => q.reject(err));

    return q.promise;
  }
};
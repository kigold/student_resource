var promise = require('bluebird');
var database = require('./config');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = database.connectionString;
var db = pgp(connectionString);


module.exports  = db;
const tape = require('tape');
const handleHome = require('../src/handlers/home.js');
const queryDb = require('../src/database/queryDb.js');
const sql = require('../src/database/index.js');

queryDb(sql.testData)
  .then(res => { console.log("inserted test data", res )})
  .catch(err => { console.log("error inserting test data", err) })

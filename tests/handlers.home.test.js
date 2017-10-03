const tape = require('tape');
const handleHome = require('../src/handlers/home.js');
const queryDb = require('../src/database/queryDb.js');
const sql = require('../src/database/index.js');
const resetTestDb = require('../src/database/resetTestDb');

resetTestDb().then(res => { console.log("sjf") })

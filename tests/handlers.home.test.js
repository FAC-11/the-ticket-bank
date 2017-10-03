const tape = require('tape');
const handleHome = require('../src/handlers/home.js');
const queryDb = require('../src/database/queryDb.js');
const sql = require('../src/database/index.js');
const resetTestDb = require('../src/database/resetTestDb');


tape('Test handlers/home', (t) => {
  resetTestDb().then(res => {
    const actual = handleHome()
    const expected = 
      t.equal(actual, 0, 'should send outbound emails')
    })
    .catch((err) => {
      t.fail(err.message)
    })
  t.end()
})
})

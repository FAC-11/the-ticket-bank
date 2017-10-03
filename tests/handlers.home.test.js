const tape = require('tape')
const { getEvents } = require('../src/handlers/home.js')
const queryDb = require('../src/database/queryDb.js')
const sql = require('../src/database/index.js')
const resetTestDb = require('../src/database/resetTestDb')

const expected = [ { title: 'Fac Welcome',
  short_desc: 'Welcome event for facsters',
  venue: 'Fac HQ',
  location: 'Palmers Road',
  to_char: '03-10-2017',
  tkts_available: 5 },
{ title: 'Fac End',
  short_desc: 'Leaving event for facsters',
  venue: 'Fac HQ',
  location: 'Palmers Road',
  to_char: '03-10-2017',
  tkts_available: 3 },
{ title: 'beiber',
  short_desc: 'concert',
  venue: 'Fac HQ',
  location: 'Palmers Road',
  to_char: '03-10-2017',
  tkts_available: 4 },
{ title: 'Haloween',
  short_desc: 'party',
  venue: 'Fac HQ',
  location: 'Palmers Road',
  to_char: '03-10-2017',
  tkts_available: 3 } ]

tape('Test handlers/home', (t) => {
  resetTestDb()
    .then(res => {
      return getEvents()
    })
    .then(actual => {
      t.deepEqual(actual, expected, 'All events in test database should be returned')
      t.end()
    })
    .catch(console.error)
})

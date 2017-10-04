const tape = require('tape')
const { getSingleEvent } = require('../src/handlers/event.js')
const queryDb = require('../src/database/queryDb.js')
const sql = require('../src/database/index.js')
const resetTestDb = require('../src/database/resetTestDb')

const expected = {
  title: 'Fac Welcome',
  short_desc: 'Welcome event for facsters',
  long_desc: 'Welcome event for all Fac memebers',
  venue: 'Fac HQ',
  location: 'Palmers Road',
  event_date: '03/10/2017',
  start_time: '10:00',
  end_date: '03/10/2017',
  end_time: '05:00',
  min_age: 18,
  tkts_available: 5,
  info: 'Everyone welcome',
  max_allocation: 2,
  org_id: 4 }

tape('Test handlers/event', (t) => {
  resetTestDb()
    .then(res => {
      return getSingleEvent({eventTitle:'Fac Welcome'})
    })
    .then(actual => {
      t.deepEqual(actual, expected, 'Single event requested in test database should be returned')
      t.end()
    })
    .catch(console.error)
})
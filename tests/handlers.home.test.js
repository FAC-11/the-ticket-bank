const tape = require('tape')
const { getEvents } = require('../src/handlers/home.js')
const resetTestDb = require('../src/database/resetTestDb')

const expected = [ { title: 'Fac Welcome',
  short_desc: 'Welcome event for facsters',
  venue: 'Fac HQ',
location: 'Palmers Road',
  event_date: '03/10/2017',
  tkts_available: 5 },
{ title: 'Fac End',
short_desc: 'Leaving event for facsters',
  venue: 'Fac HQ',
location: 'Palmers Road',
event_date: '03/10/2017',
  tkts_available: 3 }, { title: 'beiber',
short_desc: 'concert',
  venue: 'Fac HQ',
location: 'Palmers Road',
event_date: '03/10/2017',
  tkts_available: 4 }, { title: 'Haloween',
short_desc: 'party',
  venue: 'Fac HQ',
location: 'Palmers Road',
event_date: '03/10/2017',
  tkts_available: 3 } ]

tape('Test handlers/home', (t) => {
  resetTestDb()
    .then(res => {
      return getEvents()
    })
    .then(actual => {
      t.equal(actual.length, expected.length, 'Actual array length should equal expected array length')
      t.equal(actual[0].title, expected[0].title, 'Array elements should include an event title')
      t.equal(actual[1].short_desc, expected[1].short_desc, 'Array elements should include an event short description')
      t.end()
    })
    .catch(console.error)
})

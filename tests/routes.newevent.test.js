const tape = require('tape')
const supertest = require('supertest')
const app = require('../src/app')
const resetTestDb = require('../src/database/resetTestDb.js')

// test Event data
const testEvent = {
  title: 'Halloween',
  shortdesc: 'A fun Halloween partay',
  longdesc: 'Have fun and enjoy some good music',
  venue: 'Offices',
  location: 'Palmers Road, London',
  startdatetime: '31/10/2017 08:00PM',
  enddatetime: '01/11/2017 03:00AM',
  minage: 18,
  ticketsavailable: 10,
  ticketname: 'Some Name',
  additionalinfo: 'One ticket per person',
  maxallocation: 2
}

tape('Test /addevent route', (t) => {
  resetTestDb()
    .then(() => {
      supertest(app)
        .post('/addevent')
        .send(testEvent)
        .type('form')
        .end((err, res) => {
          t.ok(res.text, 'Response text should have content')
          t.equal(res.statusCode, 302, 'Status code is 302')
          t.error(err, 'No error')
          t.end()
        })
    })
})

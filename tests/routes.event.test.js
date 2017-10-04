const tape = require('tape')
const supertest = require('supertest')
const app = require('../src/app')

tape('Test event route', (t) => {
  supertest(app)
    .get('/event/Fac%20Welcome')
    .end((err, res) => {
      
      t.ok(res.text, 'Response text should have content')
      t.equal(res.statusCode, 200, 'Status code is 200')
      t.error(err, 'No error')
      t.end()
    })
})
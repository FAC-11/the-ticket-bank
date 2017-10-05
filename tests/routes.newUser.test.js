const tape = require('tape')
const supertest = require('supertest')
const app = require('../src/app')
const nock = require('nock')

tape('Test newUser route: success case', (t) => {
  nock.recorder.rec()
  supertest(app)
    .post('/newuser')
    .end((err, res) => {
      t.end()
    })
})
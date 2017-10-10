const tape = require('tape')
const supertest = require('supertest')
const app = require('../src/app')
const resetTestDb = require('../src/database/resetTestDb.js')

// test user data
const testCharity = {
  charityName: 'abdul',
  charityNumber: 234235,
  contactName: 'jack',
  contactSurname: 'jay',
  contactNumber: '392094092',
  contactEmail: 'test@blackhole.postmarkapp.com',
  password: 'somepassword',
  confirmPassword: 'somepassword',
  areaOfWork: 'some area',
  charityAddress: 'some address'
}

tape('Test /newuser route', (t) => {
  resetTestDb()
    .then(() => {
      supertest(app)
        .post('/newuser')
        .send(testCharity)
        .type('form')
        .end((err, res) => {
          t.ok(res.text, 'Response text should have content')
          t.equal(res.statusCode, 200, 'Status code is 200')
          t.error(err, 'No error')
          t.end()
        })
    })
})

const tape = require('tape')
const supertest = require('supertest')
const app = require('../src/app')
const resetTestDb = require('../src/database/resetTestDb.js')
const checkCharityEmailVerified = require('../src/database/sql-queries/checkCharityEmailVerified.js')

tape('Test /newuser route', (t) => {
  resetTestDb()
    .then(() => {
      supertest(app)
        .get('/verifycharityemail/tnTrLSUJ8R5J6sZEMGNP0ImgapDdtL')
        .end((err, res) => {
          t.ok(res.text, 'Response text should have content')
          t.equal(res.statusCode, 200, 'Status code is 200')
          t.error(err, 'No error')
          checkCharityEmailVerified('mary@t4g.co.uk')
            .then((res) => {
              t.ok(res[0].email_verified, 'email verified should be set to true')
              t.end()
            })
            .catch(console.error)
        })
    })
})

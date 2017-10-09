const tape = require('tape')
const supertest = require('supertest')
const app = require('../src/app')
const resetDb = require('../src/database/resetTestDb')

const validLogin = {
  email: 'fac@11.co.uk',
  password: 'aaaaaaaa'
}

const invalidEmail = {
  email: 'hi@11.co.uk',
  password: 'aaaaaaaa'
}

const invalidPassword = {
  email: 'hi@11.co.uk',
  password: 'bbb'
}

resetDb()
  .then(() => {
    tape('Test login post route and handlers', (t) => {
      supertest(app)
        .post('/login')
        .send(validLogin)
        .end((err, res) => {
          t.ok(res.text, 'Response text should have content')
          t.equal(res.statusCode, 302, 'Status code is 302')
          t.error(err, 'No error')
          t.end()
        })
    })

    tape('Test login post route and handlers', (t) => {
      supertest(app)
        .post('/login')
        .send(invalidEmail)
        .end((err, res) => {
          t.ok(res.text.includes('Email not found'), 'Response message should include Email not found message')
          t.equal(res.statusCode, 400, 'Status code is 400')
          t.error(err, 'No error')
          t.end()
        })
    })

    tape('Test login post route and handlers', (t) => {
      supertest(app)
        .post('/login')
        .send(invalidPassword)
        .end((err, res) => {
          t.ok(res.text.includes('Email not found'), 'Response message should include Wrong Password message')
          t.equal(res.statusCode, 400, 'Status code is 400')
          t.error(err, 'No error')
          t.end()
        })
    })
  })

const tape = require('tape')
const { testEmailClient} = require('../src/models/email.js')
const { hashPassword, checkPassword } = require('../src/models/encrypt.js')

tape('hashPassword', (t) => {
  let plaintextPwd = 'myinsecurepass'
  hashPassword(plaintextPwd)
    .then((hash) => {
      t.equal(hash.length, 60, 'length of hash should be 60 characters')
      t.equal(hash.substring(0, 7), '$2a$10$', 'is a bcrypt hash')
      t.notEqual(hash, plaintextPwd, 'hash should not equal original password')
      t.end()
    })
})

tape('Postmark', (t) => {
  testEmailClient.sendEmail({
    'From': 'steve@ticketsforgood.co.uk',
    'To': 'test@someone.com',
    'Subject': 'test',
    'TextBody': 'test'
  })
    .then((res) => {
      t.equal(res.ErrorCode, 0, 'should send outbound emails')
    })
    .catch((err) => {
      t.fail(err.message)
    })
  t.end()
})

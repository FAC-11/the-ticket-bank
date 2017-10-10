const tape = require('tape')
const { emailClient } = require('../src/models/email.js')

tape('Postmark', (t) => {
  emailClient.sendEmail({
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

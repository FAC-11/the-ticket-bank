const tape = require('tape')
const { testEmailClient} = require('../src/models/email.js')

tape('Postmark', (t) => {
  testEmailClient.sendEmail({
    "From": "steve@ticketsforgood.co.uk",
    "To": "test@someone.com",
    "Subject": "test",
    "TextBody": "test"
  })
    .then((res) => {
      t.equal(res.ErrorCode, 0, 'should send outbound emails')
    })
    .catch((err) => {
      t.fail(err.message)
    })
  t.end()
})

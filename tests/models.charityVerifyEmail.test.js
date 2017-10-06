const tape = require('tape')
const emailCharityVerifyEmail = require('../src/models/emailCharityVerifyEmail')
const randomstring = require('randomstring')

tape('emailCharityVerifyEmail', (t) => {
  let input = { contactName: 'jack', contactEmail: 'test@blackhole.postmarkapp.com', emailVerifyString: randomstring.generate(30) }

  emailCharityVerifyEmail(input)
    .then((res) => {
      t.equal(res.ErrorCode, 0, 'should send outbound email')
    })
    .catch((err) => t.fail(err.message))
  t.end()
})

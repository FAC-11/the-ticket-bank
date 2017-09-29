// so we can use POSTMARK_KEY
require('env2')('./config.env');

// require postmark
const postmark = require('postmark')

// create new client instance:
const emailClient = new postmark.Client(process.env.POSTMARK_KEY)

// for testing
const testEmailClient = new postmark.Client(process.env.POSTMARK_TEST_KEY)

module.exports = {
  emailClient: emailClient,
  testEmailClient: testEmailClient
}

// to send an email
// const { emailClient } = require('path.to/models/email.js')
// emailClient.sendEmail({
//   "From": "steve@ticketsforgood.co.uk",
//   "To": "test@blackhole.postmarkapp.com",
//   "Subject": "test",
//   "TextBody": "test"
// })

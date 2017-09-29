// so we can use POSTMARK_KEY
require('env2')('./config.env');

// require postmark
const postmark = require('postmark')

// create new client instance:
const client = new postmark.Client(process.env.POSTMARK_KEY)

module.exports = client

// to send an email
// const client = require('path.to/models/email.js')
// client.sendEmail({
//   "From": "steve@ticketsforgood.co.uk",
//   "To": "test@blackhole.postmarkapp.com",
//   "Subject": "test",
//   "TextBody": "test"
// })

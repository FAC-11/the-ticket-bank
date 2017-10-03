// if environment is not travis, require config.env
if (process.env.TRAVIS !== true) {
  require('env2')('./config.env')
}

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

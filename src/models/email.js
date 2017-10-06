// if environment is not travis, require config.env
if (process.env.TRAVIS !== true) {
  require('env2')('./config.env')
}

// check if test environment
const apiKey = process.env.NODE_ENV === 'test' ? process.env.POSTMARK_TEST_KEY : process.env.POSTMARK_KEY

// require postmark
const postmark = require('postmark')

// create new client instance:
const emailClient = new postmark.Client(apiKey)

module.exports = {
  emailClient: emailClient
}

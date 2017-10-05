const bcrypt = require('bcrypt')

module.exports = (password, hashedPw) => {
  return Promise.resolve(bcrypt.compare(password, hashedPw))
}

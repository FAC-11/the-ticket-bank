const db = require('../dbConnection.js')

module.exports = (email) => {
  const string = 'UPDATE users SET email_verified = True WHERE email=$1'
  return db.query(string, [email]).then(() => Promise.resolve(email))
}

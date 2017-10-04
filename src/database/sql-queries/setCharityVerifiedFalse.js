const db = require('../dbConnection.js')

module.exports = (email) => {
  const string = 'UPDATE users SET verified = false WHERE email=$1'
  return db.query(string, [email]).then(() => Promise.resolve(email))
}

const db = require('../dbConnection.js')

module.exports = (email) => {
  const string = 'SELECT id, password FROM users WHERE email = $1'
  // query to see if password exists
  return db.query(string, [email])
}

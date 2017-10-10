const db = require('../dbConnection.js')

module.exports = (emailVerifyString) => {
  const sqlFetchEmail = 'SELECT email FROM users WHERE email_verify_string=$1'
  return db.query(sqlFetchEmail, [emailVerifyString])
}

const db = require('../dbConnection.js')

module.exports = (email) => {
  const sqlRandomstring = 'SELECT randomstring FROM users WHERE email=$1'
  return db.query(sqlRandomstring, [email])
}

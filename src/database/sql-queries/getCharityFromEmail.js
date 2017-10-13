const db = require('../dbConnection.js')

module.exports = (email) => {
  const sql = `SELECT * FROM users WHERE email=$1`

  return db.query(sql, [email])
}

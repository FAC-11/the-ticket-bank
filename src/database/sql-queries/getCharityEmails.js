const db = require('../dbConnection.js')

module.exports = () => {
  const sql = `SELECT email FROM users;`

  return db.query(sql)
}

const db = require('../dbConnection.js')

module.exports = (body) => {
  const sql = `SELECT id, admin FROM users WHERE email = $1;`
  return db.query(sql, [body.email])
}

const db = require('../dbConnection.js')

module.exports = (body) => {
  const sql = `SELECT password FROM users WHERE email = $1;`
  return db.query(sql, [body.email])
}

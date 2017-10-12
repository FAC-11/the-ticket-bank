const db = require('../dbConnection.js')

module.exports = () => {
  const sqlFetchEmail = `SELECT email FROM users WHERE class='admin'`
  return db.query(sqlFetchEmail)
}

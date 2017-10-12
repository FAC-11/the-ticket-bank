const db = require('../dbConnection.js')

module.exports = (eventTitle) => {
  const sql = `SELECT tkts_available, max_allocation FROM events WHERE title=$1;`

  return db.query(sql, [eventTitle])
}

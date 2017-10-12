const db = require('../dbConnection.js')

module.exports = (eventTitle) => {
  const sql = `UPDATE events SET tkts_available = tkts_available - 1 WHERE title = $1`

  return db.query(sql, [eventTitle])
}

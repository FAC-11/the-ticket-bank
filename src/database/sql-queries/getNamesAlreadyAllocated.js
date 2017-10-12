const db = require('../dbConnection.js')

module.exports = (eventTitle, charityName) => {
  const sql = `SELECT full_name FROM participants INNER JOIN events ON events.id = participants.event_id WHERE events.title = $1 AND participants.charity_id = (SELECT id FROM users WHERE charity_name = $2)`

  return db.query(sql, [eventTitle, charityName])
}

const db = require('../dbConnection.js')

module.exports = (requestParams) => {
  const sql = `SELECT title, short_desc, long_desc, venue, location, to_char(event_date, 'DD/MM/YYYY') AS event_date, to_char(start_time, 'HH:MM') AS start_time, to_char(end_date, 'DD/MM/YYYY')AS end_date, to_char(end_time, 'HH:MM') as end_time,min_age, tkts_available, info, max_allocation FROM events WHERE title = $1;`

  return db.query(sql, [requestParams.eventTitle])
}

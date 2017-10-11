module.exports = {
  getEvents: `SELECT title,short_desc,venue,location, to_char(event_date, 'DD/MM/YYYY') AS event_date,tkts_available FROM events;`,
  getSingleEvent: `SELECT title, short_desc, long_desc, venue, location, to_char(event_date, 'DD/MM/YYYY') AS event_date, to_char(start_time, 'HH:MM') AS start_time, to_char(end_date, 'DD/MM/YYYY')AS end_date, to_char(end_time, 'HH:MM') as end_time,min_age, tkts_available, info, max_allocation, org_id FROM events WHERE title = $1;`,
  createEvent: `INSERT INTO events (title, short_desc, long_desc, venue, location, event_date, start_time, end_date, end_time, min_age, tkts_available, tkt_name, info, max_allocation) VALUES ($1, $2, $3, $4, $5, to_date($6,'DD-MM-YYYY'), $7, to_date($8,'DD-MM-YYYY'), $9, $10, $11, $12, $13, $14) RETURNING title;`,
  getHashedPassword: `SELECT password FROM users WHERE email = $1;`,
  getUserDetails: `SELECT id, admin FROM users WHERE email = $1;`
}

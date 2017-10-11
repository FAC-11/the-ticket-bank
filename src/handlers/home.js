const db = require('../database/dbConnection')
const sql = require('../database/index-sql')

const getEvents = () => {
  return db.query(sql.getEvents)
    .then(events => {
      return JSON.parse(JSON.stringify(events))
    })
}

module.exports = {
  getEvents
}

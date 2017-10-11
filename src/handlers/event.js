const db = require('../database/dbConnection')
const sql = require('../database/index-sql')

const getSingleEvent = (requestParams) => {
  return db.query(sql.getSingleEvent, [requestParams.eventTitle])
    .then(event => {
      return event[0]
    })
}

module.exports = {
  getSingleEvent
}

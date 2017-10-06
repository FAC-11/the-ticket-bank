const queryDb = require('../database/queryDb')
const sql = require('../database/index')

const getEvents = () => {
  return queryDb(sql.getEvents)
    .then(events => {
      return JSON.parse(JSON.stringify(events))
    })
}

module.exports = {
  getEvents
}

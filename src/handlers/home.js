const getEventsDb = require('../database/sql-queries/getEvents')

const getEvents = () => {
  return getEventsDb()
    .then(events => {
      return JSON.parse(JSON.stringify(events))
    })
}

module.exports = {
  getEvents
}

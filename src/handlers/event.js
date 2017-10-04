const queryDb = require('../database/queryDb')
const sql = require('../database/index')

const getSingleEvent = (requestParams) => {
  return queryDb(sql.getSingleEvent, [requestParams.eventTitle])
    .then(event => {
      return event[0]
    })
}

module.exports = {
  getSingleEvent
}

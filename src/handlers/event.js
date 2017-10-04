const queryDb = require('../database/queryDb')
const sql = require('../database/index')

const getSingleEvent = (requestParams) => {
  return queryDb(sql.getSingleEvent, [requestParams.eventTitle])
    .then(event => {
      return JSON.parse(JSON.stringify(event))
    })
}

module.exports = {
  getSingleEvent
}

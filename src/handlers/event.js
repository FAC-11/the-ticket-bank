const queryDb = require('../database/queryDb')
const sql = require('../database/index')

const getSingleEvent = () => {
  return queryDb(sql.getSingleEvent)
    .then(event => {
      return JSON.parse(JSON.stringify(event))
    })
}

module.exports = {
  getSingleEvent
}
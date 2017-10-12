const getSingleEventDb = require('../database/sql-queries/getSingleEvent')

const getSingleEvent = (requestParams) => {
  return getSingleEventDb(requestParams)
    .then(event => {
      return event[0]
    })
}

module.exports = {
  getSingleEvent
}

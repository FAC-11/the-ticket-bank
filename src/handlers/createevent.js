const createEventDb = require('../database/sql-queries/createEvent')

module.exports = (body) => {
  return createEventDb(body)
    .then(event => {
      return event[0]
    })
}

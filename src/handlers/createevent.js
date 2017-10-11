const queryDb = require('../database/queryDb')
const { createevent } = require('../database/index')

module.exports = (body) => {
  let { title, shortdesc, longdesc, venue, location, startdatetime, enddatetime, minage, ticketsavailable, ticketname, additionalinfo, maxallocation } = body
  let startdate = startdatetime.split(' ')[0]
  let starttime = startdatetime.split(' ')[1]
  let enddate = enddatetime.split(' ')[0]
  let endtime = enddatetime.split(' ')[1]
  return queryDb(createevent, [title, shortdesc, longdesc, venue, location, startdate, starttime, enddate, endtime, minage, ticketsavailable, ticketname, additionalinfo, maxallocation])
    .then(event => {
      return event[0]
    })
}

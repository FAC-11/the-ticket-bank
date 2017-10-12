const queryDb = require('../database/queryDb')
const { applyTicket } = require('../database/sql-queries/applyTicket.sql')

module.exports = (body) => {
  let { charityName, namesOfParticipant, ageOfParticipant, telephoneOfParticipant, emailOfParticipant, locationOfParticipant, ethnicity, additionalInfo } = body
  // return queryDb(applyTicket, [title, shortdesc, longdesc, venue, location, startdate, starttime, enddate, endtime, minage, ticketsavailable, ticketname, additionalinfo, maxallocation])
  //   .then(event => {
  //     return event[0]
  //   })
}

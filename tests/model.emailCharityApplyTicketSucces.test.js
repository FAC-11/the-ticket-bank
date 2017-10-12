const { returnSingleEmail, sendCharityApplyTicketSuccess } = require('../src/models/emailCharityApplyTicketSuccess')
const tape = require('tape')
const resetTestDb = require('../src/database/resetTestDb')

const participantsArr = [ {
  nameOfCharity: 'founders',
  eventTitle: 'event title oh',
  namesOfParticipant: 'nick',
  ageOfParticipant: '33',
  telephoneOfParticipant: '07866661111',
  emailOfParticipant: 'tew@tew.com',
  locationOfParticipant: 'ewtworth',
  ethnicity: 'White English',
  additionalInfo: 'allergic to nuts'
}, {
  nameOfCharity: 'founders',
  eventTitle: 'event title oh',
  namesOfParticipant: 're',
  ageOfParticipant: '33',
  telephoneOfParticipant: '07866661111',
  emailOfParticipant: 'tew',
  locationOfParticipant: 'ewt',
  ethnicity: 'White English',
  additionalInfo: 'ww'
}]

tape('test returnSingleEmail', t => {
  const singleEmailActual = returnSingleEmail('event title oh', 'founders@mail.com', 9)
  t.ok(singleEmailActual.To.includes('founders@mail.com'), 'Returned email should contain the correct email address')
  t.ok(singleEmailActual.TextBody.includes('event title oh'), 'Returned email should include the correct title')
  t.ok(singleEmailActual.TextBody.includes('9'), 'Returned email should include the correct number of tickets')
  t.end()
})

tape('test sendCharityApplyTicketSucess', t => {
  resetTestDb()
    .then(() => {
      return sendCharityApplyTicketSuccess(participantsArr)
    })
    .then(resultObj => {
      t.equal(resultObj.ErrorCode, 0, 'Error code should be 0')
      t.end()
    })
    .catch(err => {
      t.error(err)
      t.end()
    })
})

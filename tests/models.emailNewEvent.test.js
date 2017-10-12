const { returnSingleEmail, returnListOfEmails, sendNewEventEmails } = require('../src/models/emailNewEvent')
const tape = require('tape')
const resetTestDb = require('../src/database/resetTestDb')

const listOfEmailObjs = [ { email: 'steve@ticketsforgood.co.uk' },
  { email: 'fac@11.co.uk' },
  { email: 'john@t4g.co.uk' },
  { email: 'dan@fac.co.uk' },
  { email: 'mary@t4g.co.uk' } ]

const eventObj = {title: 'Batty Event', short_desc: 'Event for bat people', venue: 'The Cavern', location: 'Hard to find', event_date: '10/12/2019'}

tape('test returnSingleEmail', t => {
  const singleEmailActual = returnSingleEmail({ email: 'batman@cave.com' }, eventObj)
  t.ok(singleEmailActual.To.includes('batman@cave.com'), 'Returned email should contain the correct email address')
  t.ok(singleEmailActual.TextBody.includes('Batty Event'), 'Returned email should include the correct title')
  t.ok(singleEmailActual.TextBody.includes('10/12/2019'), 'Returned email should include the correct date')
  t.end()
})

tape('test returnListOfEmails function', t => {
  resetTestDb()
    .then(() => {
      const listOfEmailsActual = returnListOfEmails(listOfEmailObjs, eventObj)
      t.equal(listOfEmailsActual.length, 5, 'Length of email list length should be 5')
      t.equal(Object.keys(listOfEmailsActual[0]).length, 4, 'Length of keys in single email should be 4')
      t.equal(listOfEmailsActual[1].To, 'fac@11.co.uk', 'Second email in list should be sent to fac@11.co.uk')
      t.end()
    })
})

tape('test sendNewEventEmail', t => {
  resetTestDb()
    .then(() => {
      return sendNewEventEmails(eventObj)
    })
    .then(result => {
      t.equal(result.length, 5, '5 emails should have been sent')
      t.end()
    })
    .catch(err => {
      t.error(err)
      t.end()
    })
})

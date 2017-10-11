const { returnSingleEmail, returnListOfEmails, sendNewEventEmails } = require('../src/models/emailNewEvent')
const tape = require('tape')
const resetTestDb = require('../src/database/resetTestDb')

const singleEmailExpected = {
  From: 'steve@ticketsforgood.co.uk',
  To: 'batman@cave.com',
  Subject: 'New Tickets Available!',
  TextBody: '\n    Hi,\n    New tickets have been donated, come get them and put a smile on your clients\' faces!\n\n    Batty Event\n    Event for bat people\n    Venue: The Cavern\n    Location: Hard to find\n    Event Date: 10/12/2019\n    Link: http://0.0.0.0:4000/event/Batty Event \n\n    Check out allour available event tickets here: http://0.0.0.0:4000/\n\n    Have a good day!'
}

tape('test returnSingleEmail', t => {
  const singleEmailActual = returnSingleEmail(
    { email: 'batman@cave.com' },
    {title: 'Batty Event', short_desc: 'Event for bat people', venue: 'The Cavern', location: 'Hard to find', event_date: '10/12/2019'}
  )
  t.ok(singleEmailActual.To.includes('batman@cave.com'), 'Returned email should contain the correct email address')
  t.ok(singleEmailActual.TextBody.includes('Batty Event'), 'Returned email should include the correct title')
  t.ok(singleEmailActual.TextBody.includes('10/12/2019'), 'Returned email should include the correct date')
  t.end()
})

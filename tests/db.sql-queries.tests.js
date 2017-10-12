const tape = require('tape')
const resetTestDb = require('../src/database/resetTestDb')
const getCharityEmails = require('../src/database/sql-queries/getCharityEmails')
const getAvailableAllocatedTickets = require('../src/database/sql-queries/getAvailableAllocatedTickets')
const getNamesAlreadyAllocated = require('../src/database/sql-queries/getNamesAlreadyAllocated')

tape('test getCharityEmails from db', t => {
  const expected = [ { email: 'steve@ticketsforgood.co.uk' },
    { email: 'fac@11.co.uk' },
    { email: 'john@t4g.co.uk' },
    { email: 'dan@fac.co.uk' },
    { email: 'mary@t4g.co.uk' } ]
  return resetTestDb()
    .then(() => {
      return getCharityEmails()
    })
    .then(emailObjArr => {
      t.deepEqual(emailObjArr, expected, 'All emails should be returned from db')
      t.end()
    })
    .catch(console.error)
})

tape('test getAvailableAllocatedTickets from db', t => {
  const expected = { tkts_available: 5, max_allocation: 2 }
  resetTestDb()
    .then(() => {
      return getAvailableAllocatedTickets('Fac Welcome')
    })
    .then(resObjArr => {
      t.deepEqual(resObjArr[0], expected, 'Available tickets and max allocation should be returned')
      t.end()
    })
    .catch(console.error)
})

tape('test getNameAlreadyAllocated to event by a given charity from db', t => {
  const expected = [ { full_name: 'Test Participant 1' }, { full_name: 'Test Participant 2' } ]
  resetTestDb()
    .then(() => {
      return getNamesAlreadyAllocated('Fac Welcome', '2')
    })
    .then(resObjArr => {
      t.deepEqual(resObjArr, expected, 'All participants of given charity already registered for given event should be returned')
      t.end()
    })
    .catch(console.error)
})

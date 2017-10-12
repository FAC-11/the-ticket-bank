const tape = require('tape')
const resetTestDb = require('../src/database/resetTestDb')
const getCharityEmails = require('../src/database/sql-queries/getCharityEmails')
const getAvailableAllocatedTickets = require('../src/database/sql-queries/getAvailableAllocatedTickets')
const getNamesAlreadyAllocated = require('../src/database/sql-queries/getNamesAlreadyAllocated')
const addParticipant = require('../src/database/sql-queries/addParticipant')
const decrementAvailableTickets = require('../src/database/sql-queries/decrementAvailableTickets') 
const fetchEmailFromCharityName = require('../src/database/sql-queries/fetchEmailFromCharityName') 

tape('test getCharityEmails from db', t => {
  const expected = [ { email: 'at1mp@libero.it' }, { email: 'master.email@libero.it' }, { email: 'john@t4g.co.uk' }, { email: 'dan@fac.co.uk' }, { email: 'mary@t4g.co.uk' } ]
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
      return getNamesAlreadyAllocated('Fac Welcome', 'founders')
    })
    .then(resObjArr => {
      t.deepEqual(resObjArr, expected, 'All participants of given charity already registered for given event should be returned')
      t.end()
    })
    .catch(console.error)
})

tape('test getNameAlreadyAllocated to event by a given charity from db', t => {
  const participantObj = {
    nameOfCharity: 'T4G',
    eventTitle: 'Fac Welcome',
    namesOfParticipant: 'test participant',
    ageOfParticipant: '33',
    telephoneOfParticipant: '07866661',
    emailOfParticipant: 'testpart@test.com',
    locationOfParticipant: 'Sheffield',
    ethnicity: 'White English',
    additionalInfo: 'smoker'
  }
  resetTestDb()
    .then(() => {
      return addParticipant(participantObj)
    })
    .then(res => {
      t.equal(res.length, 0, 'Return from db insert should be empty array')
      t.end()
    })
    .catch(err => {
      t.error(err)
      t.end()
    })
})

tape('test getNameAlreadyAllocated to event by a given charity from db', t => {
  resetTestDb()
    .then(() => {
      return decrementAvailableTickets('Fac Welcome')
    })
    .then(() => {
      return getAvailableAllocatedTickets('Fac Welcome')
    })
    .then(resObjArr => {
      t.equal(resObjArr[0].tkts_available, 4, 'Tickets available for event should have been decremented')
      t.end()
    })
    .catch(err => {
      t.error(err)
      t.end()
    })
})

tape('test fetchEmailFromCharityName db', t => {
  resetTestDb()
    .then(() => {
      return fetchEmailFromCharityName('founders')
    })
    .then(resObjArr => {
      t.equal(resObjArr[0].email, 'master.email@libero.it', 'Correct email should be returned')
      t.end()
    })
    .catch(err => {
      t.error(err)
      t.end()
    })
})

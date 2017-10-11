const tape = require('tape')
const getCharityEmails = require('../src/database/sql-queries/getCharityEmails')
const resetTestDb = require('../src/database/resetTestDb')

const expected = [ { email: 'steve@ticketsforgood.co.uk' },
  { email: 'fac@11.co.uk' },
  { email: 'john@t4g.co.uk' },
  { email: 'dan@fac.co.uk' },
  { email: 'mary@t4g.co.uk' } ]

tape('test getCharityEmails from db', t => {
  resetTestDb()
    .then(() => {
      return getCharityEmails()
    })
    .then(emailObjArr => {
      t.deepEqual(emailObjArr, expected, 'All emails should be returned from db')
      t.end()
    })
    .catch(console.error)
})

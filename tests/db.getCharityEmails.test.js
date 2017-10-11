const tape = require('tape')
const getCharityEmails = require('../src/database/sql-queries/getCharityEmails')

const expected = [ { email: 'steve@ticketsforgood.co.uk' },
  { email: 'fac@11.co.uk' },
  { email: 'john@t4g.co.uk' },
  { email: 'dan@fac.co.uk' },
  { email: 'mary@t4g.co.uk' },
  { email: 'test@blackhole.postmarkapp.com' } ]

tape('test getCharityEmails from db', t => {
  getCharityEmails()
    .then(emailObjArr => {
      t.deepEqual(emailObjArr, expected, 'All emails should be returned from db')
      t.end()
    })
})

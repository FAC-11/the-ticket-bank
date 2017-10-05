const tape = require('tape')
const request = require('supertest')
const nock = require('nock')

const app = require('../src/app')

const userInput = { charityName: 'bbbbb',
  charityNumber: '1111111',
  areaOfWork: 'bbbbbb',
  contactName: 'bbbbbb',
  contactSurname: 'bbbbbbb',
  contactNumber: '111111111',
  charityAddress: 'bbbbbbbbb',
  contactEmail: 'bbb@bbb.com',
  password: 'bbbbbbbbbb',
  confirmPassword: 'bbbbbbbbbb',
  submit: '' }

tape('Test newuser route', (t) => {
  // nock.recorder.rec()

  nock('https://api.postmarkapp.com:443', {'encodedQueryParams': true})
    .post('/email', {'From': 'steve@ticketsforgood.co.uk', 'To': 'abdullah.chaudhry@outlook.com', 'Subject': 'NewCharity Signup Request from theticketbank.org', 'TextBody': '\n    Hi,\n    bbbbb requests your approval to signup to theticketbank.org.\n\n    Details:\n    Charity Name: bbbbb\n    Charity Number: 1111111\n    Area of Work: bbbbbb\n    Charity Address: bbbbbbbbb\n    Contact Name: bbbbbb\n    Contact Surname: bbbbbbb\n   Contact Email: bbb@bbb.com\n    Contact Number: 111111111\n\n    What would you like to do:\n    Click here to approve:\n    http://0.0.0.0:4000/approvecharitysignup/SjwTlsSmDefUItD3JKnvC1fhU7PFBZ\n    Click here to reject:\n    http://0.0.0.0:4000/rejectcharitysignup/SjwTlsSmDefUItD3JKnvC1fhU7PFBZ\n\n    Have a good day!'})
    .reply(200, {'To': 'abdullah.chaudhry@outlook.com', 'SubmittedAt': '2017-10-05T12:40:31.5769897-04:00', 'MessageID': 'fd048d94-c730-496e-abd1-fd62ca7669b7', 'ErrorCode': 0, 'Message': 'OK'}, [ 'Cache-Control',
      'private',
      'Content-Type',
      'application/json; charset=utf-8',
      'Server',
      'unicorns-double-rainbow',
      'X-Powered-By',
      'ASP.NET',
      'Date',
      'Thu, 05 Oct 2017 16:40:30 GMT',
      'Connection',
      'close',
      'Content-Length',
      '168' ])
  
  request(app)
    .post('/newuser')
    .type('form')
    .send(userInput)
    .end((err, res) => {
      t.same(res.statusCode, 200, 'Status code is 200')
      t.end()
    })
})

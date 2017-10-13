const { emailClient } = require('../models/email.js')
const getCharityEmails = require('../database/sql-queries/getCharityEmails')

const returnSingleEmail = (emailObj, eventObjArr) => {
  console.log('event obj', eventObjArr)
  const {title, short_desc, venue, location, event_date} = eventObjArr[0]
  const { email } = emailObj
  return {
    'From': 'steve@ticketsforgood.co.uk',
    'To': `${email}`,
    'Subject': 'New Tickets Available!',
    'TextBody': `
    Hi,
    New tickets have been donated, come get them and put a smile on your clients' faces!

    ${title}
    ${short_desc}
    Venue: ${venue}
    Location: ${location}
    Event Date: ${event_date}
    Link: http://0.0.0.0:4000/event/${title} 

    Check out all our available event tickets here: http://0.0.0.0:4000/

    Have a good day!`
  }
}

const returnListOfEmails = (arr, eventObjArr) => {
  return arr.map(emailObj => {
    return returnSingleEmail(emailObj, eventObjArr)
  })
}

const sendNewEventEmails = (eventObjArr) => {
  return getCharityEmails()
    .then(emailObjArr => {
      const emailList = returnListOfEmails(emailObjArr, eventObjArr)
      return new Promise((resolve, reject) => {
        emailClient.sendEmailBatch(emailList, (err, res) => {
          if (err) {
            reject(err)
          } else {
            resolve(res)
          }
        })
      })
    })
    .then(result => {
      return result
    }) // TODO: send email notification to admin, emails successfully sent
    .catch(err => {
      console.err(err)
      return err
    }) // TODO: send email notification to admin, error sending new email notification
}

module.exports = {
  returnSingleEmail,
  returnListOfEmails,
  sendNewEventEmails
}

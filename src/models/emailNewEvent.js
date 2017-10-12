const { emailClient } = require('../models/email.js')
const getCharityEmails = require('../database/sql-queries/getCharityEmails')

const returnSingleEmail = (emailObj, eventObj) => {
  const {title, short_desc, venue, location, event_date} = eventObj
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

const returnListOfEmails = (arr, eventObj) => {
  return arr.map(emailObj => {
    return returnSingleEmail(emailObj, eventObj)
  })
}

const sendNewEventEmails = (eventObj) => {
  return getCharityEmails()
    .then(emailObjArr => {
      const emailList = returnListOfEmails(emailObjArr, eventObj)
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

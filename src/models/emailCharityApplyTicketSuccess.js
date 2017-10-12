const { emailClient } = require('../models/email.js')
const fetchEmailFromCharityName = require('../database/sql-queries/fetchEmailFromCharityName')

const returnSingleEmail = (eventTitle, charityEmail, numberOfTickets) => {
  return {
    'From': 'steve@ticketsforgood.co.uk',
    'To': `${charityEmail}`,
    'Subject': 'New Tickets Available!',
    'TextBody': `
    Hi,
    You have successfully applied for ${numberOfTickets} tickets for ${eventTitle}.
    Steve from Tickets for good will be in touch with information about your tickets.

    Check out all our available event tickets here: http://0.0.0.0:4000/

    Have a good day!`
  }
}

const sendCharityApplyTicketSuccess = (participantsArr) => {
  const { nameOfCharity, eventTitle } = participantsArr[0]
  return fetchEmailFromCharityName(nameOfCharity)
    .then(emailObjArr => {
      const email = returnSingleEmail(eventTitle, emailObjArr[0].email, participantsArr.length)
      return new Promise((resolve, reject) => {
        emailClient.sendEmail(email, (err, res) => {
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
      console.error(err)
      return err
    }) // TODO: send email notification to admin, error sending new email notification
}

module.exports = {
  returnSingleEmail,
  sendCharityApplyTicketSuccess
}

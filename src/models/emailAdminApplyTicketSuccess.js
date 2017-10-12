const { emailClient } = require('../models/email.js')
const fetchAdminEmail = require('../database/sql-queries/fetchAdminEmail')
const fetchEmailFromCharityName = require('../database/sql-queries/fetchEmailFromCharityName')

const returnSingleEmail = (adminEmail, charityEmail, participantsArr) => {
  return {
    'From': 'steve@ticketsforgood.co.uk',
    'To': `${adminEmail}`,
    'Subject': `${participantsArr[0].nameOfCharity} Tickets for  ${participantsArr[0].eventTitle}`,
    'TextBody': `
    Hi,
     ${participantsArr[0].nameOfCharity} have succesfully applied for tickets for ${participantsArr.length} for ${participantsArr[0].eventTitle}.

     Please get in touch with them at ${charityEmail} to provide them with tickets and any extra information necessary.

     Have a good day!`
  }
}

const emailAdminApplyTicketSuccess = (participantsArr) => {
  let adminEmail
  let charityEmail
  return fetchAdminEmail()
    .then(emailObjArr => {
      adminEmail = emailObjArr[0].email
      return fetchEmailFromCharityName(participantsArr[0].nameOfCharity)
    })
    .then(emailObjArr => {
      charityEmail = emailObjArr[0].email
      const email = returnSingleEmail(adminEmail, charityEmail, participantsArr)
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
  emailAdminApplyTicketSuccess
}

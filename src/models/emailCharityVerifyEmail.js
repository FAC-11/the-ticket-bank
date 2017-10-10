const { emailClient } = require('../models/email.js')

module.exports = (input) => {
  const { contactName, contactEmail, emailVerifyString } = input

  return emailClient.sendEmail({
    'From': 'steve@ticketsforgood.co.uk',
    'To': `${contactEmail}`,
    'Subject': 'Verify your email address from theticketbank.org',
    'TextBody': `
    Hi ${contactName},

    To confirm your email, please click the following link:
    http://0.0.0.0:4000/verifycharityemail/${emailVerifyString}

    Have a good day!`
  })
}

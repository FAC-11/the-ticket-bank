const { emailClient } = require('../models/email.js')

module.exports = (input) => {
  const {charity_name, charity_number, area_of_work, charity_address, name, surname, email, contact_phone, randomstring} = input

  emailClient.sendEmail({
    'From': 'steve@ticketsforgood.co.uk',
    'To': 'frafrefrifrofru@libero.it',
    'Subject': 'New Charity Signup Request from theticketbank.org',
    'TextBody': `
    Hi,
    ${charity_name} requests your approval to signup to theticketbank.org.

    Details:
    Charity Name: ${charity_name}
    Charity Number: ${charity_number}
    Area of Work: ${area_of_work}
    Charity Address: ${charity_address}
    Contact Name: ${name}
    Contact Surname: ${surname}
    Contact Email: ${email}
    Contact Number: ${contact_phone}

    What would you like to do:
    Click here to approve:
    http://0.0.0.0:4000/approvecharitysignup/${randomstring}
    Click here to reject:
    http://0.0.0.0:4000/rejectcharitysignup/${randomstring}

    Have a good day!`
  })
}

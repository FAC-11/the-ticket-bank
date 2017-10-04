const { emailClient } = require('../models/email.js')

module.exports = (input) => {
  const {charityName, charityNumber, areaOfWork, charityAddress, contactName, contactSurname, contactEmail, contactNumber, randomstring} = input

  emailClient.sendEmail({
    'From': 'steve@ticketsforgood.co.uk',
    'To': 'abdullah.chaudhry@outlook.com',
    'Subject': 'New Charity Signup Request from theticketbank.org',
    'TextBody': `
    Hi,
    ${charityName} requests your approval to signup to theticketbank.org.

    Details:
    Charity Name: ${charityName}
    Charity Number: ${charityNumber}
    Area of Work: ${areaOfWork}
    Charity Address: ${charityAddress}
    Contact Name: ${contactName}
    Contact Surname: ${contactSurname}
    Contact Email: ${contactEmail}
    Contact Number: ${contactNumber}

    What would you like to do:
    Click here to approve:
    http://0.0.0.0:4000/validate/email=${contactEmail}&str=${randomstring}
    Click here to reject:
    http://0.0.0.0:4000/reject/email=${contactEmail}&str=${randomstring}

    Have a good day!`
  })
}

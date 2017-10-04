const { emailClient } = require('./email')

module.exports = (email) => {
  emailClient.sendEmail({
    'From': 'steve@ticketsforgood.co.uk',
    'To': `${email}`,
    'Subject': 'Application declined',
    'TextBody': `
 Hi,

 Unfortunately your application has been declined.
 `
  })
}

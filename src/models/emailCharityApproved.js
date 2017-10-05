const { emailClient } = require('./email')

module.exports = (email) => {
  emailClient.sendEmail({
    'From': 'steve@ticketsforgood.co.uk',
    'To': `${email}`,
    'Subject': 'Application successful',
    'TextBody': `
 Hi,

 You are now verified and can apply to claim tickets on our platform
 `
  })
}

const db = require('../dbConnection.js')
const { emailClient } = require('../../models/email.js')
const querystring = require('querystring')

module.exports = (req, response) => {

  const input = querystring.parse(req.params.userinfo)
  const { email, str } = input

  const sqlRandomstring = 'SELECT randomstring FROM users WHERE email=$1'
  
   db.query(sqlRandomstring, [email])
   .then((res) => {
     if (res[0].randomstring === str) {

         emailClient.sendEmail({
           "From": "steve@ticketsforgood.co.uk",
           "To": "abdullah.chaudhry@outlook.com",
           "Subject": "Application rejected",
           "TextBody": `
           Hi,

           Unfortunately your application has been declined.
           `
         })
         .then(() => {
           console.log('done')
           response.render('adminRejectsCharity')
         })

     }
   })
}

const db = require('../dbConnection.js')
const { emailClient } = require('../../models/email.js')
const querystring = require('querystring')

module.exports = (req, response) => {

  const input = querystring.parse(req.params.userinfo)
  const { email, str } = input
  // const string = 'UPDATE users SET verified=TRUE WHERE randomStr=$1'
  const sqlRandomstring = 'SELECT randomstring FROM users WHERE email=$1'
  const sqlUpdateVerified = 'UPDATE users SET verified =true WHERE email=$1'

   db.query(sqlRandomstring, [email])
   .then((res) => {
     if (res[0].randomstring === str) {
       db.query(sqlUpdateVerified, [email])
       .then(() => {
         emailClient.sendEmail({
           "From": "steve@ticketsforgood.co.uk",
           "To": "abdullah.chaudhry@outlook.com",
           "Subject": "Application successful",
           "TextBody": `
           Hi,

           You are now verified and can apply to claim tickets on our platform
           `
         })
         .then(() => {
           console.log('done')
           response.render('adminVerifiesCharity')
         })
       })
      //  .then(() => {
      //    console.log('done')
      //    response.render('adminVerifiesCharity')
      //  })

     }
   })
}

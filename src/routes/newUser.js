const validateSignup = require('../models/validateSignup.js')
const { hashPassword } = require('../models/encrypt.js')
const createRandomString = require('../models/createRandomString.js')
const dbConnection = require('../database/dbConnection.js')
const addNewUser = require('../database/sql-queries/addNewUser.js')
const randomstring = require('randomstring')
const { emailClient } = require('../models/email.js')



module.exports = (req, res) => {
  validateSignup(req)
  .then(hashPassword)
  .then((hashedpwd) => {
    req.body.password = hashedpwd
    req.body.randomstring = randomstring.generate(20);
  })
  .then(() => addNewUser(req.body))
  // .then(() => {
  //   emailClient.sendEmail({
  //     "From": "steve@ticketsforgood.co.uk",
  //     "To": "at1mp@libero.it",
  //     "Subject": "test",
  //     "TextBody": "test"
  //   })
  // })
  //.then(sendEmailToSteve)
  .catch((err) => {
    console.log(err);
  })
}

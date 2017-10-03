const validateSignup = require('../models/validateSignup.js')
const { hashPassword } = require('../models/encrypt.js')
const addNewUser = require('../database/sql-queries/addNewUser.js')
const randomstring = require('randomstring')
const verifyCharity = require('../models/verifyCharity.js')


module.exports = (req, res) => {
  console.log('inside newUser');
  validateSignup(req)
  .then(hashPassword)
  .then((hashedpwd) => {
    req.body.password = hashedpwd
    req.body.randomstring = randomstring.generate(30);
  })
  .then(() => addNewUser(req.body))
  .then(() => {
    console.log('done')
  })
  .then(() => {
    verifyCharity(req.body)
  })
  //.then(sendEmailToSteve)
  .catch((err) => {
    console.log(err);
  })
}

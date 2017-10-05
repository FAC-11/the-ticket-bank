const bcrypt = require('bcrypt')
const randomstring = require('randomstring')
const validateSignup = require('../models/validateSignup.js')
const addNewUser = require('../database/sql-queries/addNewUser.js')
const verifyCharity = require('../models/verifyCharity.js')

module.exports = (req, res) => {
  console.log(req.body)
  validateSignup(req)
    .then(password => bcrypt.hash(password, 10))
    .then(hashedpwd => {
      req.body.password = hashedpwd
      req.body.randomstring = randomstring.generate(30)
      return addNewUser(req.body)
    })
    .then(() => {
      verifyCharity(req.body)
      res.render('charitySignupSubmit')
    })
    .catch((err) => {
      console.log(err)
    })
}

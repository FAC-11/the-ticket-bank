const bcrypt = require('bcrypt')
const randomstring = require('randomstring')
const validateCharitySignup = require('../models/validateCharitySignup.js')
const addCharityDb = require('../database/sql-queries/addCharityDb.js')
const emailAdminVerifyCharity = require('../models/emailAdminVerifyCharity.js')

module.exports = (req, res) => {
  validateCharitySignup(req)
    .then(password => bcrypt.hash(password, 10))
    .then(hashedpwd => {
      req.body.password = hashedpwd
      req.body.randomstring = randomstring.generate(30)
      return addCharityDb(req.body)
    })
    .then(() => {
      emailAdminVerifyCharity(req.body)
      res.render('newCharitySubmit')
    })
    .catch((err) => {
      res.render('newCharitySignup', {
        err: err.message,
        input: req.body })
    })
}

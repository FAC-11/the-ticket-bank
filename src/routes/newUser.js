const validateSignup = require('../models/validateSignup.js')
const { hashPassword } = require('../models/encrypt.js')
const addNewUser = require('../database/sql-queries/addNewUser.js')
const randomstring = require('randomstring')
const verifyCharity = require('../models/verifyCharity.js')
const addHashToReqBody = require('../models/addHashToReqBody.js')
const addRandomStringToReqBody = require('../models/addRandomStringToReqBody.js')

module.exports = (req, res) => {

  validateSignup(req)
  .then(hashPassword)
  .then(hash => addHashToReqBody(hash, req))
  .then(req => addRandomStringToReqBody(req))
  .then(() => addNewUser(req.body))
  .then(() => verifyCharity(req.body))
  .then(() => res.render('charitySignupSubmit'))
  .catch((err) => {
    console.log(err);
  })
}

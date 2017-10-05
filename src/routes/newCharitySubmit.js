const validateCharitySignup = require('../models/validateCharitySignup.js')
const { hashPassword } = require('../models/encrypt.js')
const addCharityDb = require('../database/sql-queries/addCharityDb.js')
const emailAdminVerifyCharity = require('../models/emailAdminVerifyCharity.js')
const addHashReqBody = require('../models/addHashReqBody.js')
const addRandStringReqBody = require('../models/addRandStringReqBody.js')

module.exports = (req, res) => {
  validateCharitySignup(req)
    .then(hashPassword)
    .then(hash => addHashReqBody(hash, req))
    .then(req => addRandStringReqBody(req))
    .then(() => addCharityDb(req.body))
    .then(() => emailAdminVerifyCharity(req.body))
    .then(() => res.render('newCharitySubmit'))
    .catch((err) => {
      console.log(err)
    })
}

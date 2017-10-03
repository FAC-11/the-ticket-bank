const validateSignup = require('../models/validateSignup.js')
const { hashPassword } = require('../models/encrypt.js')
const dbConnection = require('../database/dbConnection.js')

module.exports = (req, res) => {
  validateSignup(req)
  .then(hashPassword)
  .then(hashedpwd => req.body.password = hashedpwd)
  .then()
  .catch((err) => {
    console.log(err);
  })
}

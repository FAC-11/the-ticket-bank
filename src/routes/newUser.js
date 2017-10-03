const validateSignup = require('../models/validateSignup.js')
const { hashPassword } = require('../models/encrypt.js')
const createRandomString = require('../models/createRandomString.js')
const dbConnection = require('../database/dbConnection.js')
const addNewUser = require('../database/sql-queries/addNewUser.js')

module.exports = (req, res) => {
  validateSignup(req)
  .then(hashPassword)
  .then(hashedpwd => req.body.password = hashedpwd)
  // .then(createRandomString)
  .then(() => addNewUser(req.body))
  .catch((err) => {
    console.log(err);
  })
}

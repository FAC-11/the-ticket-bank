const fetchRandomString = require('../database/sql-queries/fetchRandomString')
const querystring = require('querystring')
const updateVerifiedTrue = require('../database/sql-queries/updateVerifiedTrue')
const validationEmail = require('../models/validationEmail')

module.exports = (req, res) => {
  let userinfo = querystring.parse(req.params.userinfo)

  fetchRandomString(userinfo.email)
    .then((str) => {
      if (str[0].randomstring === userinfo.str) {
        updateVerifiedTrue(userinfo.email)
      } else {
        return Promise.reject(new Error('There was a problem with your request'))
      }
    })
    .then(() => {
      validationEmail(userinfo.email)
    })
    .then(() => {
      res.render('adminVerifiesCharity')
    })
    .catch(err => console.log(err))
}

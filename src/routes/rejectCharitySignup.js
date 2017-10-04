const fetchRandomString = require('../database/sql-queries/fetchRandomString.js')
const querystring = require('querystring')
const rejectionEmail = require('../models/rejectionEmail')

module.exports = (req, res) => {
  let userinfo = querystring.parse(req.params.userinfo)

  fetchRandomString(userinfo.email)
    .then((str) => {
      if (str[0].randomstring === userinfo.str) {
        rejectionEmail(userinfo.email)
      } else {
        return Promise.reject(new Error('There was a problem with your request'))
      }
    })
    .then(() => {
      res.render('adminRejectsCharity')
    })
    .catch(err => console.log(err))
}

const fetchEmailFromRandString = require('../database/sql-queries/fetchEmailFromRandString')
const emailCharityRejected = require('../models/emailCharityRejected')
const setCharityVerifiedFalse = require('../database/sql-queries/setCharityVerifiedFalse')

module.exports = (req, res) => {
  let reqRandomString = req.params.userinfo
  fetchEmailFromRandString(reqRandomString)
    .then((rows) => {
      if (rows[0]) {
        let email = rows[0].email
        setCharityVerifiedFalse(email).then((email) => emailCharityRejected(email))
      } else {
        return Promise.reject(new Error('There was a problem with your request'))
      }
    })
    .then(() => {
      res.render('adminRejectsCharity')
    })
    .catch(err => console.log(err))
}

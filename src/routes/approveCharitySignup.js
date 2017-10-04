const fetchEmailFromRandString = require('../database/sql-queries/fetchEmailFromRandString')
const setCharityVerifiedTrue = require('../database/sql-queries/setCharityVerifiedTrue')
const sendEmailCharityApproved = require('../models/sendEmailCharityApproved')

module.exports = (req, res) => {
  let reqRandomString = req.params.userinfo
  fetchEmailFromRandString(reqRandomString)
    .then((rows) => {
      let email = rows[0].email
      if (email) {
        setCharityVerifiedTrue(email).then((email) => sendEmailCharityApproved(email))
      } else {
        return Promise.reject(new Error('There was a problem with your request'))
      }
    })
    .then(() => {
      res.render('adminVerifiesCharity')
    })
    .catch(err => console.log(err))
}

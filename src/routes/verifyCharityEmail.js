const fetchEmailFromEmailVerifyString = require('../database/sql-queries/fetchEmailFromEmailVerifyString')
const setCharityEmailVerifiedTrue = require('../database/sql-queries/setCharityEmailVerifiedTrue')

module.exports = (req, res) => {
  let emailVerifyString = req.params.userinfo
  fetchEmailFromEmailVerifyString(emailVerifyString)
    .then((rows) => {
      if (rows[0]) {
        let email = rows[0].email
        setCharityEmailVerifiedTrue(email)
      } else {
        return Promise.reject(new Error('There was a problem with your request'))
      }
    })
    .then(() => {
      res.render('charityEmailVerified')
    })
    .catch(err => console.log(err))
}

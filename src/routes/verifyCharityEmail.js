const fetchEmailFromEmailVerifyString = require('../database/sql-queries/fetchEmailFromEmailVerifyString')
const setCharityEmailVerifiedTrue = require('../database/sql-queries/setCharityEmailVerifiedTrue')
const getCharityFromEmail = require('../database/sql-queries/getCharityFromEmail')
const emailAdminVerifyCharity = require('../models/emailAdminVerifyCharity.js')

module.exports = (req, res) => {
  let emailVerifyString = req.params.userinfo
  fetchEmailFromEmailVerifyString(emailVerifyString)
    .then((rows) => {
      if (rows[0]) {
        let email = rows[0].email
        return setCharityEmailVerifiedTrue(email)//returns email?
      } else {
        return Promise.reject(new Error('There was a problem with your request'))
      }
    })
    //.then : use email to get charity info needed by emailAdminVerifyCharity 
    // const {charityName, charityNumber, areaOfWork, charityAddress, contactName, contactSurname, contactEmail, contactNumber, randomstring} = input
    .then(email => {
      console.log('email is ', email)
      res.render('charityEmailVerified')
      return getCharityFromEmail(email)
    })
    .then(charityObjArr => {
      console.log(charityObjArr[0])
      emailAdminVerifyCharity(charityObjArr[0])
    })
    .catch(err => console.log(err))
}

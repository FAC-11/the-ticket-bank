const bcrypt = require('bcrypt')
const getHashedPasswordDb = require('../database/sql-queries/getHashedPassword')
const getUserDetailsDb = require('../database/sql-queries/getUserDetails')

const verifyLogin = (req, res) => {
  return getHashedPasswordDb(req.body)
    .then(hashedPassword => {
      if (!hashedPassword.length) {
        res.status(400).render('login', {
          errorEmail: 'Email not found'
        })
      }
      return bcrypt.compare(req.body.password, hashedPassword[0].password)
    })
    .then(bool => {
      if (bool) return getUserDetailsDb(req.body)
      else {
        res.status(400).render('login', {
          errorPassword: 'Wrong Password'
        })
      }
    })
    .then(userDetails => {
      console.log('userDetails: ', userDetails)
      req.session.userId = userDetails[0].id
      req.session.isAdmin = userDetails[0].admin
      req.session.charityName = userDetails[0].charity_name
      res.redirect('/')
    })
}

module.exports = {
  verifyLogin
}

const bcrypt = require('bcrypt')
const queryDb = require('../database/queryDb')
const sql = require('../database/index')

const verifyLogin = (req, res) => {
  return queryDb(sql.getHashedPassword, [req.body.email])
    .then(hashedPassword => {
      if (!hashedPassword.length) { console.log('email not found') }
      return bcrypt.compare(req.body.password, hashedPassword[0].password)
    })
    .then(bool => {
      if (bool) return queryDb(sql.getUserDetails, [req.body.email])
      else console.log('passwords dont match')
    })
    .then(userDetails => {
      req.session.userId = userDetails[0].id
      req.session.isAdmin = userDetails[0].admin
      res.redirect('/')
    })
}

module.exports = {
  verifyLogin
}

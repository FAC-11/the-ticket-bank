const bcrypt = require('bcrypt')
const db = require('../database/dbConnection')
const sql = require('../database/index-sql')

const verifyLogin = (req, res) => {
  return db.query(sql.getHashedPassword, [req.body.email])
    .then(hashedPassword => {
      if (!hashedPassword.length) {
        res.status(400).render('login', {
          errorEmail: 'Email not found'
        })
      }
      return bcrypt.compare(req.body.password, hashedPassword[0].password)
    })
    .then(bool => {
      if (bool) return db.query(sql.getUserDetails, [req.body.email])
      else {
        res.status(400).render('login', {
          errorPassword: 'Wrong Password'
        })
      }
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

const fetchpwuser = require('../database/sql-queries/fetchpwuser')
const checkpassword = require('../models/checkpassword')
// const {setToken} = require('../models/token')
let userId

module.exports = (req, res) => {
  fetchpwuser(req.body.username)
    .then(hashedPw => {
      if (hashedPw.length !== 0) {
        userId = hashedPw[0].id
        checkpassword(req.body.password, hashedPw[0].password)
      } else return Promise.reject(new Error('No such user'))
    })
    .then(trueorfalse => {
      if (trueorfalse) {
        req.login(userId)
        // setToken(req, res, profile, req.body.username)
      } else return Promise.reject(new Error('Incorrect password'))
    })
    .then(res.redirect('/'))
    .catch(err => res.send(err.message))
}

const {signin, checkPw} = require('../models/queries')
const {setToken} = require('../models/token')
let userId

module.exports = (req, res) => {
  signin(req.body.username)
    .then(hashedPw => {
      if (hashedPw.length !== 0) {
        userId = hashedPw[0].id
        return checkPw(req.body.password, hashedPw[0].password)
      } else throw new Error('No such user')
    })
    .then(trueorfalse => {
      if (trueorfalse) {
        setToken(req, res, userId, req.body.username)
      } else throw new Error('Incorrect password')
    })
    .catch(err => res.send(err.message))
  // .then(res.redirect('/'))
}

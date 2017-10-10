const { verifyLogin } = require('../handlers/verifyLogin')

module.exports = (req, res, next) => {
  verifyLogin(req, res)
}

const validateCharity = require('../database/sql-queries/validateCharity.js')
const querystring = require('querystring')

module.exports = (req, res) => {
  let userinfo = querystring.parse(req.params.userinfo)

  validateCharity(req, res)
}
const rejectCharity = require('../database/sql-queries/rejectCharity.js')
const querystring = require('querystring')

module.exports = (req, res) => {
  let userinfo = querystring.parse(req.params.userinfo)

  rejectCharity(req, res)
}

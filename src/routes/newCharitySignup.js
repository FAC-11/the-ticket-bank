const { getTitle } = require('../handlers/signup')

module.exports = (req, res) => {
  res.render('newCharitySignup', { title: getTitle() })
}

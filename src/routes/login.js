const { getTitle } = require('../handlers/login')

module.exports = (req, res) => {
  res.render('login', {title: getTitle()})
}

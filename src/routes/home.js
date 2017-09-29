const { getEvent } = require('../handlers/home')

module.exports = (req, res) => {
  res.render('home', getEvent())
}

const { getTitle } = require('../handlers/addevent')

module.exports = (req, res) => {
  res.render('addevent', { title: getTitle() })
}

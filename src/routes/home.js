const { getEvents } = require('../handlers/home')

module.exports = (req, res) => {
  getEvents()
    .then(events => {
      req.session.user = 'person'
      res.render('home', { events })
    })
    .catch(console.error)
}

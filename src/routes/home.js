const { getEvents } = require('../handlers/home')

module.exports = (req, res) => {
  getEvents()
    .then(events => {
      res.render('home', events)
    })
}

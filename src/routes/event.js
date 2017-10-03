const {getSingleEvent} = require('../handlers/event')

module.exports = (req, res) => {
  getSingleEvent(req.params)
    .then(event => {
      res.render('event', event)
    })
}

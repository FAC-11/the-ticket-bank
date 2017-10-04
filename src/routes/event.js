const {getSingleEvent} = require('../handlers/event')

module.exports = (req, res, next) => {
  getSingleEvent(req.params)
    .then(event => {
      if (!event) {
        next()
      }
      res.render('event', event)
    })
}

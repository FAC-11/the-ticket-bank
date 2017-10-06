const {getSingleEvent} = require('../handlers/event')

module.exports = (req, res, next) => {
  getSingleEvent(req.params)
    .then(event => {
      if (!event) {
        next()
      } else {
        res.render('event', event)
      }
    })
    .catch(console.error)
}

const {getSingleEvent} = require('../handlers/event')

module.exports = (req, res, next) => {
  getSingleEvent(req.params)
    .then(event => {
      if (!event) {
        next()
      } else {
        const session = {
          userId: req.session.userId || null,
          isAdmin: req.session.isAdmin || null
        }
        res.render('event', {event, session} )
      }
    })
    .catch(console.error)
}

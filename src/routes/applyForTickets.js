const { getSingleEvent } = require('../handlers/event')

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
        console.log('reqparticipants', typeof req.body.numberOfParticipants)
        res.render('applyForTickets', {
          max_allocation: event.max_allocation,
          permittedTicket: new Array(parseInt(req.body.numberOfParticipants)).fill(1)
        })
      }
    })
    .catch(console.error)
}


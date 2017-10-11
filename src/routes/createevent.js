const createEvent = require('../handlers/createevent')
const validateEvent = require('../models/validateEvent.js')
const getSingleEvent = require('../database/sql-queries/getSingleEvent')
const emailNewEvent = require('../models/emailNewEvent')

module.exports = (req, res) => {
  validateEvent(req)
    .then(() => createEvent(req.body))
    .then(event => {
      if (!event) {
        throw new Error('There was a problem adding the event to the database.')
      } else {
        res.redirect(`/event/${event.title}`)
        return getSingleEvent({eventTitle: event.title})
      }
    })
    .then(event => {
      emailNewEvent(event)
    })
    .catch((err) => {
      console.error(err)
      if (err.code) {
        res.render('addevent', {
          err: 'Sorry there was a problem adding the event.',
          input: req.body
        })
      } else {
        res.render('addevent', {
          err: err.message,
          input: req.body
        })
      }
    })
}

const createEvent = require('../handlers/createevent')

module.exports = (req, res) => {
  createEvent(req.body)
    .then(event => {
      if (!event) {
        throw new Error('There was a problem adding the event to the database')
      } else {
        res.redirect(`/event/${event.title}`)
      }
    })
    .catch((err) => {
      res.render('error', {
        layout: 'error',
        statusCode: 404,
        errorMessage: err
      })
    })
}

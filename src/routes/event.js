const {getSingleEvent} = require('../handlers/event')

module.exports = (req, res) => {
  getSingleEvent(req.params)
    .then(event => {
      console.log(event)
      res.render('event', event)
    })
}

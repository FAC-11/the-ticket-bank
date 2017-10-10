const { getEvents } = require('../handlers/home')

module.exports = (req, res) => {
  getEvents()
    .then(events => {
      const session = {
        userId : req.session.userId || null ,
        isAdmin : req.session.isAdmin || null  
      }
      res.render('home', { events, session })
    })
    .catch(console.error)
}

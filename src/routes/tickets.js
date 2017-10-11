const applyTicket = require('../handlers/applyTicket')
const validateTicketForm = require('../models/validateTicketForm.js')

module.exports = (req, res) => {
  console.log(req.body);
  // validateTicketForm(req)
  // .then(()=> {
  //   for (req.body.numberoftickets)
  // })
  //   .then(() => console.log(req.body))
  //   applyTicket(req.body))
//     .then(event => {
//       if (!event) {
//         throw new Error('There was a problem adding the event to the database.')
//       } else {
//         res.redirect(`/event/${event.title}`)
//       }
//     })
//     .catch((err) => {
//       if (err.code) {
//         res.render('addevent', {
//           err: 'Sorry there was a problem with adding the event.',
//           input: req.body
//         })
//       } else {
//         res.render('addevent', {
//           err: err.message,
//           input: req.body
//         })
//       }
//     })
}

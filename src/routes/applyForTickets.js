module.exports = (req, res) => {
  res.render('applyForTickets',{max_allocation:3,
    permittedTicket: new Array(3).fill(1) })
}

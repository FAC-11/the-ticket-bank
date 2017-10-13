const extractTicketParticipants = (req) => {
  const charityName = req.session.charityName
  const numTickets = req.body.numberoftickets
  const eventTitle = req.params.eventTitle
  delete req.body['numberoftickets']
  delete req.body['submit']
  delete req.body['charityName']

  var participantsArray = []

  // push empty objects into array
  for (var i = 0; i < numTickets; i++) {
    participantsArray.push({})
  }

  for (var j = 0; j < numTickets; j++) {
    Object.keys(req.body).forEach(function (key) {
      if (key[ key.length - 1 ] === String(j)) {
        participantsArray[j][key.split('_')[0]] = req.body[key]
      }
    })
  }

  // add charityName key to each participant object
  for (var k = 0; k < numTickets; k++) {
    participantsArray[k]['charityName'] = charityName
    participantsArray[k]['eventTitle'] = eventTitle
  }
  return participantsArray
}

module.exports = extractTicketParticipants

const extractTicketParticipants = (req) => {
  const charityName = req.session.charityName
  const numTickets = req.body.numberoftickets

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
  }
  console.log('participantsArray: ', participantsArray)
  return participantsArray
}

module.exports = extractTicketParticipants

// var req = {
//   body: {
//     numberoftickets: '3',
//     namesOfParticipant_0: '6',
//     ageOfParticipant_0: '6',
//     telephoneOfParticipant_0: '6',
//     emailOfParticipant_0: '6',
//     locationOfParticipant_0: '6',
//     additionalInfo_0: '6',
//     namesOfParticipant_1: '1',
//     ageOfParticipant_1: '1',
//     telephoneOfParticipant_1: '1',
//     emailOfParticipant_1: '1',
//     locationOfParticipant_1: '1',
//     additionalInfo_1: '1',
//     namesOfParticipant_2: '2',
//     ageOfParticipant_2: '2',
//     telephoneOfParticipant_2: '2',
//     emailOfParticipant_2: '2',
//     locationOfParticipant_2: '2',
//     additionalInfo_2: '2',
//     submit: ''
//   }
// }

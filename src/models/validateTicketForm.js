const validate = (req) => {
  return new Promise((resolve, reject) => {
    if (req.body.namesOfCharity.length === 0) reject(new Error('Charity name is not valid'))
    else if (req.body.namesOfCharity.length < 2) reject(new Error('Charity name is not valid'))
    else if (req.body.eventTitle.length === 0) reject(new Error('Age can\'t be empty'))
    if (req.body.eventTitle.length < 2) reject(new Error('Event title is not valid'))
    else if (req.body.namesOfParticipant.length === 0) reject(new Error('Participant name can\'t be empty'))
    else if (req.body.namesOfParticipant.length < 3) reject(new Error('Participant name is too short'))
    else if (req.body.ageOfParticipant.length === 0) reject(new Error('Participant age can\'t be empty'))
    else if (req.body.ageOfParticipant.match(/[A-Z]/ig)) reject(new Error('Participant age can\'t contain letters'))
    else if (req.body.telephoneOfParticipant.length === 0) reject(new Error('Participant phone can\'t be empty'))
    else if (req.body.telephoneOfParticipant.match(/[A-Z]/ig)) reject(new Error('Participant phone can\'t contain letters'))
    else if (req.body.emailOfParticipant.length === 0) reject(new Error('Email can\'t be empty'))
    else if (!req.body.emailOfParticipant.match(/[_a-z0-9-]+(.[_a-z0-9-]+)@[a-z0-9-]+(.[a-z0-9-]+)(.[a-z]{2,})/i)) reject(new Error('Please enter a valid email.'))
    else if (req.body.locationOfParticipant.length === 0) reject(new Error('Participant location can\'t be empty'))
    else if (req.body.locationOfParticipant.length < 2) reject(new Error('Participant location is too short'))
    else if (req.body.ethnicity.length === 0) reject(new Error('Participant ethnicity can\'t be empty'))
    else {
      resolve(req.body.password)
    }
  })
}

module.exports = validate

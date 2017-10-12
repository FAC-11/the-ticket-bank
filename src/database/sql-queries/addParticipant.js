const db = require('../dbConnection.js')

module.exports = (participantObj) => {
  const {
    nameOfCharity,
    eventTitle,
    namesOfParticipant,
    ageOfParticipant,
    telephoneOfParticipant,
    emailOfParticipant,
    locationOfParticipant,
    ethnicity,
    additionalInfo
  } = participantObj
  const string = `INSERT INTO participants (event_id, charity_id, full_name, age, email, contact_phone, location, ethnicity, add_info) VALUES ((SELECT id FROM events where title = $1), (SELECT id FROM users WHERE charity_name = $2), $3, $4, $5, $6, $7, $8, $9)`

  return db.query(string, [
    eventTitle,
    nameOfCharity,
    namesOfParticipant,
    ageOfParticipant,
    emailOfParticipant,
    telephoneOfParticipant,
    locationOfParticipant,
    ethnicity,
    additionalInfo])
}

const db = require('../dbConnection.js')

module.exports = (input) => {
  const {charityName, charityNumber, areaOfWork, charityAddress, contactName, contactSurname, contactEmail, contactNumber, password, randomstring} = input
  const string = `INSERT INTO users (class, charity_name, charity_number, area_of_work, charity_address, name, surname, email, contact_phone, password, randomstring ) VALUES ('charity', $1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`

  return db.query(string, [charityName, charityNumber, areaOfWork, charityAddress, contactName, contactSurname, contactEmail, contactNumber, password, randomstring])
}
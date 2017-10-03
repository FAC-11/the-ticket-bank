const db = require('../dbConnection.js')

module.exports = (input) => {
  const {charityName, charityNumber, areaOfWork, charityAddress, contactName, contactSurname, contactEmail, contactNumber, password} = input
  const string = `INSERT INTO users (charity_name, charity_number, area_of_work, charity_address, name, surname, email, contact_phone, password ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`

  return db.query(string, [charityName, charityNumber, areaOfWork, charityAddress, contactName, contactSurname, contactEmail, contactNumber, password])
}

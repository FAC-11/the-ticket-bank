const db = require('../dbConnection.js')

module.exports = (charityName) => {
  const sqlFetchEmail = 'SELECT email FROM users WHERE charity_name=$1'
  return db.query(sqlFetchEmail, [charityName])
}

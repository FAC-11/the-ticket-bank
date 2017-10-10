const db = require('../dbConnection.js')

module.exports = (charityEmail) => {
  const sqlFetchEmailVerified = 'select email_verified from users WHERE email =$1'
  return db.query(sqlFetchEmailVerified, [charityEmail])
}

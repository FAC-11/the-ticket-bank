const db = require('../dbConnection.js')

module.exports = (reqRandomString) => {
  const sqlFetchEmail = 'SELECT email FROM users WHERE randomstring=$1'
  return db.query(sqlFetchEmail, [reqRandomString])
}

// select email from users WHERE randomstring = 'Kumv1OwWIPVY6cEZ0SFwTvJpAfXFbp'

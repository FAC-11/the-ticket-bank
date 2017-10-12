const db = require('./dbConnection')
const { dbSchema } = require('./sql-files/sqlFilesIndex')

db.query(dbSchema)
  .then(console.log)
  .catch(console.error)

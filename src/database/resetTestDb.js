const db = require('./dbConnection')
const { dbSchema, testData } = require('./sql-files/sqlFilesIndex')

const resetTestDb = () => {
  return db.query(dbSchema)
    .then(res => {
      return db.query(testData)
    })
    .catch(console.error)
}
resetTestDb()
module.exports = resetTestDb

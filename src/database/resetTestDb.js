const queryDb = require('./queryDb')
const sql = require('./index')

const resetTestDb = () => {
  return queryDb(sql.dbSchema)
    .then(res => {
      return queryDb(sql.testData)
    })
    .catch(console.log)
}

resetTestDb()

module.exports = resetTestDb

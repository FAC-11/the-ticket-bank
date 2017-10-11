const queryDb = require('./queryDb')

const resetTestDb = () => {
  return queryDb('./sql-queries/dbSchema.sql')
    .then(res => {
      return queryDb('./sql-queries/testData.sql')
    })
    .catch(console.log)
}

module.exports = resetTestDb

const queryDb = require('./queryDb')
const sql = require('./index')

module.exports = () => {
  return queryDb(sql.dbSchema)
    .then(res => {
     return queryDb(sql.testData)
    })
    .catch(console.log)
}

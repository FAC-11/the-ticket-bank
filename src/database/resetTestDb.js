const queryDb = require('./queryDb')
const sql = require('./index');

module.exports = () => {
  return queryDb(sql.dbSchema)
    .then(res => {
      queryDb(sql.testData)
    })
    .catch(console.log)
}

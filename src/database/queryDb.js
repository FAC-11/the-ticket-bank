const { QueryFile } = require('pg-promise')
const path = require('path')
const db = require('./dbConnection')

module.exports = (sqlFilePath) => {
  const sql = QueryFile(path.join(__dirname, sqlFilePath), { minify: true })
  return db.query(sql)
}
const { QueryFile } = require('pg-promise')
const path = require('path')
const db = require('./dbConnection')

module.exports = (sqlFilePath) => {
  const sql = file => QueryFile(path.join(__dirname, file), { minify: true })

  const build = sql(sqlFilePath)

  return db.query(build)
}

const QueryFile = require('pg-promise').QueryFile
const path = require('path')

const sql = (file) => {
  const fullPath = path.join(__dirname, file)
  return new QueryFile(fullPath, { minify: true })
}

module.exports = {
  dbSchema: sql('dbSchema.sql'),
  testData: sql('testData.sql')
}

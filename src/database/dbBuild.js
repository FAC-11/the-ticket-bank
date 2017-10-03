const queryDb = require('./queryDb')

queryDb('./sql-queries/dbSchema.sql')
  .then(console.log)
  .catch(console.log)

const queryDb = require('../database/queryDb');
const sql = require('../database/index');

const getEvents = () => {
  return queryDb(sql.getEvents)
}

module.exports = {
  getEvents
}

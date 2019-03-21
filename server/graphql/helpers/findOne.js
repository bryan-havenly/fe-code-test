const knex = require('../../db/knex');

module.exports = async (tableName, where = {}) => knex
  .select()
  .table(tableName)
  .modify((queryBuilder) => {
    if (where && Object.keys(where).length > 0) queryBuilder.where(where);
  })
  .limit(1)
  .then(results => (results || [])[0]);

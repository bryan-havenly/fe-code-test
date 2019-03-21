const knex = require('../../db/knex');

module.exports = async (tableName, update = {}, where = {}) => knex(tableName)
  .update(update)
  .modify((queryBuilder) => {
    if (where && Object.keys(where).length > 0) queryBuilder.where(where);
  });

const designerData = require('../../graphql/data/designers');

exports.up = (knex, Promise) => knex.schema.hasTable('designers')
  .then((exists) => {
    if (exists) return Promise.resolve();

    return knex.schema.createTable('designers', (table) => {
      table.increments(); // integer id
      table.integer('availability').unsigned();
      table.string('design_photo');
      table.string('display_name');
      table.boolean('is_favorite').notNullable().defaultTo(false);
      table.string('photo');
      table.string('vanity_id');
      table.timestamp('created').notNullable().defaultTo(knex.fn.now());
      table.timestamp('modified').notNullable().defaultTo(knex.fn.now());
    }).then(() => {
      return knex('designers').insert(designerData);
    });
  });

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTableIfExists('designers'),
]);

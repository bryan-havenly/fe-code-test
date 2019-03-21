exports.up = async (knex, Promise) => {
  const roomsExists = await knex.schema.hasTable('rooms');
  if (roomsExists) return;

  await knex.schema.createTable('rooms', (table) => {
    table.increments(); // integer id
    table.boolean('is_paid').notNullable().defaultTo(false);
    table.string('name').notNullable();
    table.timestamp('created').notNullable().defaultTo(knex.fn.now());
    table.timestamp('modified').notNullable().defaultTo(knex.fn.now());
  });

  await knex('rooms').insert([
    { id : 1, name : 'Room 1', isPaid : false },
    { id : 2, name : 'Room 2', isPaid : true },
    { id : 3, name : 'Room 3', isPaid : true },
    { id : 4, name : 'Room 4', isPaid : false },
    { id : 5, name : 'Room 5', isPaid : true },
  ]);

  const boardsExists = await knex.schema.hasTable('boards');
  if (boardsExists) return;

  await knex.schema.createTable('boards', (table) => {
    table.increments(); // integer id
    table.string('name').notNullable();
    table.integer('rating').unsigned();
    table.integer('room_id')
      .unsigned()
      .references('id')
      .inTable('rooms')
      .notNullable();
    table.timestamp('created').notNullable().defaultTo(knex.fn.now());
    table.timestamp('modified').notNullable().defaultTo(knex.fn.now());
  });

  await knex('boards').insert([
    { id : 1, name : 'Board 1', roomId : 2, rating : 4 },
    { id : 2, name : 'Board 2', roomId : 2, rating : 4 },
    { id : 3, name : 'Board 3', roomId : 2, rating : 4 },
    { id : 4, name : 'Board 4', roomId : 3, rating : 4 },
    { id : 5, name : 'Board 5', roomId : 3, rating : 4 },
    { id : 6, name : 'Board 6', roomId : 5, rating : 4 },
    { id : 7, name : 'Board 7', roomId : 5, rating : 4 },
  ]);
};

exports.down = async (knex, Promise) => {
  await knex.schema.dropTableIfExists('boards');
  await knex.schema.dropTableIfExists('rooms');
};

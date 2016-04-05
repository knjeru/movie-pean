
exports.up = function(knex, Promise) {
  return knex.schema.table('movies', function(table) {
      table.increments('id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('movies', function(table) {
      table.dropColumn('id');
  })
};

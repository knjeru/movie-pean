
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', function(table) {
    table.string('title');
    table.date('releaseDate');
    table.string('director');
    table.text('description');
    table.integer('rating');
    table.text('imgUrl');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies');
};

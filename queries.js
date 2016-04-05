var knex = require('./db/knex');

function Movies() {
  return knex('movies');
}

module.exports = {

  getMovies: function() {
    return Movies();
  },

  getMovie: function(id) {
    return Movies().where('id', id);
  },

  addMovie: function(body) {
    return Movies()
            .insert({
              title: body.title,
              releaseDate: body.releaseDate,
              director: body.director,
              description: body.description,
              rating: body.rating,
              imgUrl: body.imgUrl
            });
  },

  updateMovie: function(id, body) {
    return Movies()
            .where('id', id)
            .update({
              title: body.title,
              releaseDate: body.releaseDate,
              director: body.director,
              description: body.description,
              rating: body.rating,
              imgUrl: body.imgUrl
            });
  },

  deleteMovie: function(id) {
      return Movies().where('id', id).del();
  }

};

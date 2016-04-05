
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('movies').del(),

    // Inserts seed entries
    knex('movies').insert(
      {
        title: 'Wedding Crashers',
        releaseDate: '2005-02-11',
        director: 'David Dobkin',
        description: 'John Beckwith and Jeremy Grey, a pair of committed womanizers who sneak into weddings to take advantage of the romantic tinge in the air, find themselves at odds with one another when John meets and falls for Claire Cleary.',
        rating: 7,
        imgUrl: 'http://ia.media-imdb.com/images/M/MV5BMTc4NTUyNzU4MV5BMl5BanBnXkFtZTcwMzcyMTkyMQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
      }),
    knex('movies').insert({
        title: 'Dark Knight',
        director: 'Christopher Nolan',
        description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
        rating: 9,
        imgUrl: 'http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg'
      }),
    knex('movies').insert({
        title: 'Batman V Superman',
        director: 'Zack Snyder',
        description: "Fearing the actions of Superman are left unchecked, Batman takes on the man of steel, while the world wrestles with what kind of a hero it really needs. With Batman and Superman fighting each other, a new threat, Doomsday, is created by Lex Luthor. It's up to Superman and Batman to set aside their differences along with Wonder Woman to stop Lex Luthor and Doomsday from destroying Metropolis.",
        rating: 9,
        imgUrl: 'http://ia.media-imdb.com/images/M/MV5BNTE5NzU3MTYzOF5BMl5BanBnXkFtZTgwNTM5NjQxODE@._V1_SY317_CR1,0,214,317_AL_.jpg'
      })
  );
};

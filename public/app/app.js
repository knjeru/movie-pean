'use strict';

angular.module('movieApp', ['ui.router', 'door3.css'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  // For any unmatched url, we'll redirect the user to the home state
  $urlRouterProvider.otherwise('/');

  // Here are our states
  $stateProvider
    .state('movies', {
      url: '/',
      templateUrl: '/app/views/movies/movies.html',
      controller: 'MainController'
    })
    .state('newMovie', {
      url:'/movie/new',
      templateUrl: '/app/views/movies/new.html',
      controller: 'MainController'
    })
    .state('movie', {
      url: '/movie/:id',
      templateUrl: '/app/views/movies/movie.html',
      controller: 'SingleMovieController',
    })
    .state('editMovie', {
      url: '/movie/:id/edit',
      templateUrl: '/app/views/movies/edit.html',
      controller: 'SingleMovieController'
    });
}]);

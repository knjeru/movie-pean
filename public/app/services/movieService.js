'use strict';

angular.module('movieApp')
    .factory('movieServiceApi', ['$http', function($http) {

    var urlBase = '/api/movies';
    var movieApi = {};

    movieApi.getMovies = function() {
    return $http.get(urlBase);
    };

    movieApi.getMovie = function(id) {
    return $http.get(urlBase + '/' + id);
    };

    movieApi.addMovie = function(movie) {
    return $http.post(urlBase + '/new', movie);
    };

    movieApi.updateMovie = function(id, movie) {
    return $http.put(urlBase + '/' + id +'/edit', movie);
    };

    movieApi.deleteMovie = function(id) {
    return $http.delete(urlBase + '/' + id+ '/delete');
    };

    return movieApi;

}]);

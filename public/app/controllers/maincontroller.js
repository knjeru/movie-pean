'use strict';

angular.module('movieApp')
.controller('MainController', ['$scope', 'movieServiceApi', '$location', function($scope, movieServiceApi, $location) {

 $scope.movieList = {};
 $scope.movieFormData = {};

  movieServiceApi.getMovies()
  .success(function(data) {
    // console.log(data);
    $scope.movieList = data;
  });

  $scope.addMovie = function () {
    console.log($scope.movieFormData);
    movieServiceApi.addMovie($scope.movieFormData)
    .success(function(data) {
      $location.url('/');
      // Add a message on successful submission of form before the next page is served up
    });
  };

}])
.controller('SingleMovieController', ['$scope', '$stateParams', 'movieServiceApi', '$location', function($scope, $stateParams, movieServiceApi, $location) {

  $scope.id = $stateParams.id;
  // $scope.movieFormData = {};

  movieServiceApi.getMovie($scope.id)
  .success(function(data) {
    $scope.movie = data[0];
  });

  $scope.updateMovie = function() {
    movieServiceApi.updateMovie($scope.id, $scope.movieFormData)
    .success(function(data) {
      $location.url('/movie/'+$scope.id);
      // add a message on successful submission of form before the next page is served up
    });
  };

  $scope.deleteMovie = function() {
    movieServiceApi.deleteMovie($scope.id)
    .success(function(data) {
      $location.url('/');
      // redirect the user upon successful delete
    });
  };

}]);

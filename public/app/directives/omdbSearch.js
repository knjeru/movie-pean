'use strict';

angular.module('movieApp')
  .directive('omdbSearch', ['omdbService', 'movieServiceApi', '$location',function(omdbService, movieServiceApi, $location) {
    return {
      require: 'ngModel',
      restrict: 'E',
      scope: {
        ngModel: '='
      },
      templateUrl: '/app/views/movies/omdbsearch.html',
      controller: 'searchOMDB'
    };
  }])
  .controller('searchOMDB', ['$scope', '$location', 'omdbService','movieServiceApi', function($scope, $location,omdbService, movieServiceApi) {

    $scope.title = '';
    $scope.omdbForm = {
      title: '',
      director: '',
      releaseDate: '',
      rating: '',
      imgUrl: '',
    };

    // $scope.$watch('omdbForm', function(newVal, oldVal) {
    //   if (newVal === oldVal) {
    //     console.log('listening for changes');
    //   } else if (newVal !== oldVal) {
    //     console.log(newVal);
    //   }
    // });

    $scope.$watch('title', function(newVal, oldVal) {
      if (newVal === oldVal) {
          $scope.message = 'Search for a movie!';
      } else if (newVal !== oldVal) {

          omdbService.getMovies($scope.title)
            .success(function(data) {
              // console.log(data);
              /* lets return information to the UI based on if
              the response returned OMDB holds a movie*/
              if (data.Response === "True") {
              $scope.omdbResult = data;
              var correctedRating = Math.round(data.imdbRating);
              $scope.omdbForm = {
                title: data.Title,
                director: data.Director,
                releaseDate: data.Released,
                description: data.Plot,
                rating: correctedRating,
                imgUrl: data.Poster,
              };
            }
              else {
                console.log('not in our db');
              }
            });

            $scope.addOmdbMovie = function () {
              movieServiceApi.addMovie($scope.omdbForm)
              .success(function() {
                $location.url('/');
                // Add a message on successful submission of form before the next page is served up
              });
            };
      }
    });

  }]);

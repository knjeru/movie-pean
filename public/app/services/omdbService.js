'use strict';

angular.module('movieApp')
  .factory('omdbService', ['$http', '$stateParams',function($http,$stateParams) {

    var urlBase = 'http://www.omdbapi.com/?t=';
    var setJson = '&plot=short&r=json';
    var omdbAPI = {};

    omdbAPI.getMovies = function(title) {
      return $http.get(urlBase + title + setJson);
    };

    return omdbAPI;

  }]);

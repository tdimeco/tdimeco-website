'use strict';

/**
 * @ngdoc function
 * @name tdimecoApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the tdimecoApp
 */
angular.module('tdimecoApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name tdimecoApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the tdimecoApp
 */
angular.module('tdimecoApp')
  .controller('HomeCtrl', function ($rootScope, $scope) {
    $rootScope.pageTitle = 'Site web personnel';
    $scope.items = [
      {color: '#bbb', height: 200},
      {color: '#999', height: 300},
      {color: '#777', height: 100},
      {color: '#555', height: 250},
      {color: '#333', height: 150}
    ];
  });

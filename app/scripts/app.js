'use strict';

/**
 * @ngdoc overview
 * @name tdimecoApp
 * @description
 * # tdimecoApp
 *
 * Main module of the application.
 */
angular
  .module('tdimecoApp', [
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

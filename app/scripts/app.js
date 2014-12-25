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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

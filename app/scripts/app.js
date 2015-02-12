//
// Angular application declaration
// ==============================================================
//


(function () { 'use strict';


  // App declaration
  var app = angular.module('tdimecoApp', [
    'ngRoute',
    'ngSanitize'
  ]);

  // App config
  app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.otherwise({
      redirectTo: '/'
    });
  });


})();

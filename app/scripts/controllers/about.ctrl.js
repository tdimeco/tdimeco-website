//
// About page controller
// ==============================================================
//


(function () { 'use strict';


  var app = angular.module('tdimecoApp');

  // Route config
  app.config(function ($routeProvider) {
    $routeProvider.when('/about', {
      templateUrl: 'views/pages/about.html',
      controller: 'AboutController'
    });
  });

  // Controller declaration
  app.controller('AboutController', function ($scope) {
    $scope.$emit('changePageTitle', 'À propos');
  });


})();

//
// Terms page controller
// ==============================================================
//


(function () { 'use strict';


  var app = angular.module('tdimecoApp');

  // Route config
  app.config(function ($routeProvider) {
    $routeProvider.when('/terms', {
      templateUrl: 'views/pages/terms.html',
      controller: 'TermsController'
    });
  });

  // Controller declaration
  app.controller('TermsController', function ($scope) {
    $scope.$emit('changePageTitle', 'Mentions légales');
  });


})();

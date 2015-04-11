//
// App controller
// ==============================================================
//


(function () { 'use strict';


  var app = angular.module('tdimecoApp');

  // Controller declaration
  app.controller('AppController', function ($scope, $location, $window) {

    $scope.isHomePage = true;

    // Page title change event
    $scope.$on('changePageTitle', function (event, title) {
      $scope.pageTitle = (title ? 'Thomas Di Meco - ' + title : '');
    });

    // Route change event
    $scope.$on('$routeChangeSuccess', function () {
      $scope.isHomePage = ($location.path() === '/');
    });

    // Page load event
    $($window).load(function () {
      $('body').removeClass('preload');
    });
  });


})();

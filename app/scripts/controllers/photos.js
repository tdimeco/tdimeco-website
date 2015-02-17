//
// Photos controller
// ==============================================================
//


(function () { 'use strict';


  var app = angular.module('tdimecoApp');

  // Route config
  app.config(function ($routeProvider) {
    $routeProvider.when('/photos', {
      templateUrl: 'views/pages/photos.html',
      controller: 'PhotosController'
    });
  });

  // Controller declaration
  app.controller('PhotosController', function ($rootScope, $scope, flickr) {

    $rootScope.pageTitle = 'Photos';

    function onSuccess (data) {
      $scope.photosItems = data;
      $scope.errorMessage = '';
    }

    function onError () {
      $scope.photosItems = [];
      $scope.errorMessage = 'Error!';
    }

    // Load Flickr photos
    flickr.getPublicPhotos(onSuccess, onError);
  });


})();

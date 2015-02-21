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

    $scope.$emit('changePageTitle', 'Photos');
    $scope.message = '<i class="fa fa-circle-o-notch fa-spin"></i> Chargement des photos...';

    function onSuccess (data) {
      $scope.photosItems = data;
      $scope.message = '';
    }

    function onError (errorMessage) {
      $scope.photosItems = [];
      $scope.message = errorMessage;
    }

    // Load Flickr photos
    flickr.getPublicPhotos(onSuccess, onError);
  });


})();

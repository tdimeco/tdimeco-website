//
// Home item directive
// ==============================================================
//


(function () { 'use strict';


  var app = angular.module('tdimecoApp');

  // Directive declaration
  app.directive('homeItem', function () {
    return {
      templateUrl: 'views/components/home-item.html',
      restrict: 'E',
      scope: {
        item: '='
      }
    };
  });


})();

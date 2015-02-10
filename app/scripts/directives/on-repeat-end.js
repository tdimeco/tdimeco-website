//
// On repeat end directive
// ==============================================================
//


(function () { 'use strict';


  var app = angular.module('tdimecoApp');

  // Directive declaration
  app.directive('onRepeatEnd', function () {
    return function (scope, element, attrs) {
      if (scope.$last) {
        setTimeout(function () {
          scope.$emit('onRepeatEnd', element, attrs);
        }, 1);
      }
    };
  });


})();

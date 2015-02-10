//
// Database service
// ==============================================================
//


(function () { 'use strict';


  var app = angular.module('tdimecoApp');

  // Service declaration
  app.factory('database', function () {

    var homeItems = [
      {color: '#bbb', height: 200},
      {color: '#999', height: 300},
      {color: '#777', height: 100},
      {color: '#555', height: 250},
      {color: '#333', height: 150}
    ];

    return {
      getHomeItems: function () {
        return homeItems;
      }
    };
  });


})();

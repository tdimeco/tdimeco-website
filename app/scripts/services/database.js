//
// Database service
// ==============================================================
//


(function () { 'use strict';


  var app = angular.module('tdimecoApp');

  // Service declaration
  app.factory('database', function () {

    var homeItems = [
      {color: '#999', height: 210},
      {color: '#888', height: 340},
      {color: '#777', height: 95 },
      {color: '#666', height: 240},
      {color: '#555', height: 170},
      {color: '#444', height: 230},
      {color: '#333', height: 80 },
      {color: '#222', height: 120},
      {color: '#111', height: 160}
    ];

    return {
      getHomeItems: function () {
        return homeItems;
      }
    };
  });


})();

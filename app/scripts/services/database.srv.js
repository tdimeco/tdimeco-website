//
// Database service
// ==============================================================
//


(function () { 'use strict';


  var app = angular.module('tdimecoApp');

  // Service declaration
  app.factory('database', function () {

    var homeItems = [
      {title: 'Titre de mon projet', color: 'darkcyan', height: 210},
      {title: 'Titre de mon projet', color: 'darkorange',  height: 340},
      {title: 'Titre de mon projet', color: 'darkred',  height: 95 },
      {title: 'Titre de mon projet', color: 'lightblue',  height: 240},
      {title: 'Titre de mon projet', color: 'green',  height: 170},
      {title: 'Titre de mon projet', color: 'yellow',  height: 230},
      {title: 'Titre de mon projet', color: 'blueviolet',  height: 80 },
      {title: 'Titre de mon projet', color: 'darkslateblue',  height: 120},
      {title: 'Titre de mon projet', color: 'indianred',  height: 160}
    ];

    return {
      getHomeItems: function () {
        return homeItems;
      }
    };
  });


})();

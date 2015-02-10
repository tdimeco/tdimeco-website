//
// Home items organizer directive
// ==============================================================
//


(function () { 'use strict';


  var app = angular.module('tdimecoApp');

  // Directive declaration
  app.directive('homeItemsOrganizer', function () {
    return {
      controller: function ($scope, $element, $window) {

        var $cols = $element.find('.item-column');

        // Listener fired when all elements are available on page load
        $scope.$on('onRepeatEnd', function () {
          updateHomeItems($cols, getColumnVisibilities($cols));
        });

        // Listener fired on window resize
        var previousVisibilities = getColumnVisibilities($cols);
        $($window).on('resize', function () {
          var newVisibilities = getColumnVisibilities($cols);
          for (var i = 0; i < newVisibilities.length; i++) {
            if (previousVisibilities[i] !== newVisibilities[i]) {
              previousVisibilities = newVisibilities;
              updateHomeItems($cols, newVisibilities);
              break;
            }
          }
        });

      }
    };
  });


  /**
   * Updates the home items position depending on the number of available columns.
   *
   * @param $cols A jQuery object that contains the list of columns.
   * @param columnVisibilities An array of boolean that represents the visibility state of each column.
   */
  function updateHomeItems ($cols, columnVisibilities) {

    // Update column classes
    $cols.removeClass('first-column last-column');
    $cols.first().addClass('first-column');

    var lastVisibleIndex = 0;
    for (var i = 1; i < columnVisibilities.length; i++) {
      if (columnVisibilities[i]) {
        lastVisibleIndex = i;
      } else {
        break;
      }
    }

    $cols.eq(lastVisibleIndex).addClass('last-column');

    // DEV
    console.log($cols.eq(0).children().length);
    console.log($cols.eq(0).is(':visible'));
    console.log($cols.eq(1).is(':visible'));
    console.log($cols.eq(2).is(':visible'));
  }


  /**
   * Get an array containing if the column is visible or not for each index.
   *
   * @param $cols A jQuery object that contains the list of columns.
   * @return Array An array of booleans.
   */
  function getColumnVisibilities ($cols) {
    var a = [];
    for (var i = 0; i < $cols.length; i++) {
      a.push($cols.eq(i).is(':visible'));
    }
    return a;
  }


})();

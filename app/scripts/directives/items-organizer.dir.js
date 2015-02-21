//
// Items organizer directive
// ==============================================================
//


(function () { 'use strict';


  var app = angular.module('tdimecoApp');

  // Directive declaration
  app.directive('itemsOrganizer', function () {
    return {
      controller: function ($scope, $element, $window) {

        var $cols = $element.find('.item-column');

        // Listener fired when all elements are available
        $scope.$on('onRepeatEnd', function () {
          updateItems($cols, getColumnVisibilities($cols));
        });

        // Listener fired on window resize
        var previousVisibilities = getColumnVisibilities($cols);
        $($window).on('resize', function () {
          var newVisibilities = getColumnVisibilities($cols);
          for (var i = 0; i < newVisibilities.length; i++) {
            if (previousVisibilities[i] !== newVisibilities[i]) {
              previousVisibilities = newVisibilities;
              updateItems($cols, newVisibilities);
              break;
            }
          }
        });
      }
    };
  });


  /**
   * Updates the items position depending on the number of available columns.
   *
   * @param $cols A jQuery object that contains the list of columns.
   * @param columnVisibilities An array of boolean that represents the visibility state of each column.
   */
  function updateItems ($cols, columnVisibilities) {

    var $items = $cols.find('.item');

    // Update column classes
    $cols.removeClass('first-column last-column column-n-1 column-n-2 column-n-3');
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
    $cols.addClass('column-n-' + (lastVisibleIndex + 1));

    // Detach items
    $items.detach();

    // Put each item...
    for (var j = 0; j < $items.length; j++) {

      // ... In the smallest column
      var smallestIndex = 0;
      var smallestHeight = -1;
      for (var c = 0; c <= lastVisibleIndex; c++) {
        var columnHeight = $cols.eq(c).height();
        if (columnHeight < smallestHeight || smallestHeight < 0) {
          smallestHeight = columnHeight;
          smallestIndex = c;
        }
      }

      var $itemToPut = $items.filter('[data-item-order="' + j + '"]');
      $cols.eq(smallestIndex).append($itemToPut);
    }
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

//
// Flickr service
// ==============================================================
//


(function () { 'use strict';


  // API constants
  var FLICKR_API_KEY = 'be47079d0aa6f99ab445deb7fa5cdf97';
  var USER_ID        = '126296696@N08';


  var app = angular.module('tdimecoApp');

  // Service declaration
  app.factory('flickr', function ($http) {

    /**
     * Get all public pictures for the user.
     *
     * @param successCallback A success callback
     * @param errorCallback An error callback
     */
    function getPublicPhotos (successCallback, errorCallback) {

      var config = {
        params: {
          'method'      : 'flickr.people.getPublicPhotos',
          'format'      : 'json',
          'jsoncallback': 'JSON_CALLBACK',
          'api_key'     : FLICKR_API_KEY,
          'user_id'     : USER_ID,
          'extras'      : 'url_z,path_alias',
          'per_page'    : 500
        }
      };

      // Do the request
      $http.jsonp('https://api.flickr.com/services/rest/', config)
        .success(function (data) {
          if (data.stat === 'ok') {
            var returnedPhotos = data.photos.photo;
            var result = [];
            for (var i = 0; i < returnedPhotos.length; i++) {
              var p = returnedPhotos[i];
              result.push({
                title   : p.title,
                width   : p.width_z,  // jshint ignore:line
                height  : p.height_z, // jshint ignore:line
                imageUrl: p.url_z,    // jshint ignore:line
                pageUrl : getFlickrPageURL(p.pathalias, p.id)
              });
            }
            successCallback(result);
          } else {
            errorCallback('Erreur Flickr : ' + data.message);
          }
        })
        .error(function (data, status) {
          errorCallback('Erreur lors de la requête (Code ' + status + ')');
        });
    }

    return {
      getPublicPhotos: getPublicPhotos
    };

  });


  /**
   * Returns the Flickr page URL of a photo.
   *
   * @param user The user ID
   * @param id The photo ID
   * @return String The page URL
   */
  function getFlickrPageURL (user, id) {
    return 'https://www.flickr.com/photos/' + user + '/' + id;
  }


})();

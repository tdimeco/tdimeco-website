//
// Flickr service
// ==============================================================
//


(function () { 'use strict';


  // API constants
  var FLICKR_API_KEY = 'be47079d0aa6f99ab445deb7fa5cdf97';
  var USER_NAME      = 'tdimeco';
  var USER_ID        = '126296696@N08';


  var app = angular.module('tdimecoApp');

  // Service declaration
  app.factory('flickr', function ($http) {

    /**
     * Get all public pictures for the user.
     *
     * @param success A success callback
     * @param error An error callback
     */
    function getPublicPhotos (success, error) {

      var config = {
        params: {
          'method'        : 'flickr.people.getPublicPhotos',
          'format'        : 'json',
          'nojsoncallback': 1,
          'api_key'       : FLICKR_API_KEY,
          'user_id'       : USER_ID
        }
      };

      // Do the request
      $http.get('https://api.flickr.com/services/rest/', config)
        .success(function (data) {
          if (data.stat === 'ok') {
            var returnedPhotos = data.photos.photo;
            var result = [];
            for (var i = 0; i < returnedPhotos.length; i++) {
              var p = returnedPhotos[i];
              result.push({
                title   : p.title,
                imageUrl: getFlickrImageURL(p.farm, p.server, p.id, p.secret, 'z'),
                pageUrl : getFlickrPageURL(USER_NAME, p.id)
              });
            }
            success(result);
          } else {
            error(data.message);
          }
        })
        .error(function (data) {
          error(data.message);
        });
    }

    return {
      getPublicPhotos: getPublicPhotos
    };

  });


  /**
   * Returns the Flickr image URL.
   *
   * @param farm The farm ID
   * @param server The server ID
   * @param id The photo ID
   * @param secret The photo secret ID
   * @param size The size
   * @return String The photo URL
   */
  function getFlickrImageURL (farm, server, id, secret, size) {
    return 'https://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + (size ? '_' + size : '') + '.jpg';
  }


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

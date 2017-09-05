import Vue from 'vue'

// Constants

var FLICKR_API_KEY = 'be47079d0aa6f99ab445deb7fa5cdf97'
var USER_ID        = '126296696@N08'

// Methods

function getPublicPhotos (successCallback, errorCallback) {

  var options = {
    jsonpCallback: 'flickrJsonpCallback',
    params: {
      'method'      : 'flickr.people.getPublicPhotos',
      'format'      : 'json',
      'jsoncallback': 'flickrJsonpCallback',
      'api_key'     : FLICKR_API_KEY,
      'user_id'     : USER_ID,
      'extras'      : 'url_z,path_alias',
      'per_page'    : 500
    }
  }

  function onSuccess (response) {
    var data = response.body
    if (data.stat === 'ok') {
      var returnedPhotos = data.photos.photo
      var result = []
      for (var i = 0; i < returnedPhotos.length; i++) {
        var p = returnedPhotos[i]
        result.push({
          title   : p.title,
          width   : p.width_z,
          height  : p.height_z,
          imageUrl: p.url_z,
          pageUrl : getFlickrPageURL(p.pathalias, p.id)
        })
      }
      successCallback(result)
    } else {
      errorCallback('Erreur Flickr : ' + data.message)
    }
  }

  function onError (response) {
    errorCallback('Erreur ' + response.status + ' : ' + response.statusText)
  }

  // Launch the request
  Vue.http.jsonp('https://api.flickr.com/services/rest/', options).then(
    onSuccess,
    onError
  )
}

function getFlickrPageURL (user, id) {
  return 'https://www.flickr.com/photos/' + user + '/' + id;
}

// Exports

export default {
  getPublicPhotos: getPublicPhotos
}

import Vue from 'vue'

# Constants
FLICKR_API_KEY = 'be47079d0aa6f99ab445deb7fa5cdf97'
USER_ID = '126296696@N08'

# Methods
getPublicPhotos = (successCallback, errorCallback) ->

  options =
    jsonpCallback: 'flickrJsonpCallback'
    params:
      'method': 'flickr.people.getPublicPhotos'
      'format': 'json'
      'jsoncallback': 'flickrJsonpCallback'
      'api_key': FLICKR_API_KEY
      'user_id': USER_ID
      'extras': 'url_z,path_alias'
      'per_page': 500

  onSuccess = (response) ->
    data = response.body
    if data.stat == 'ok'
      returnedPhotos = data.photos.photo
      result = []
      i = 0
      while i < returnedPhotos.length
        p = returnedPhotos[i]
        result.push
          title: p.title
          width: p.width_z
          height: p.height_z
          imageUrl: p.url_z
          pageUrl: getFlickrPageURL(p.pathalias, p.id)
        i++
      successCallback(result)
    else
      errorCallback("Erreur Flickr : #{data.message}")
    return

  onError = (response) ->
    errorCallback "Erreur #{response.status} : #{response.statusText}"
    return

  # Launch the request
  Vue.http.jsonp('https://api.flickr.com/services/rest/', options).then(
    onSuccess,
    onError
  )
  return

getFlickrPageURL = (user, id) -> "https://www.flickr.com/photos/#{user}/#{id}"

# Exports
export default
  getPublicPhotos: getPublicPhotos

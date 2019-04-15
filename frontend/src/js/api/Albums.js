/**
 * Albums API handlers
 */
var AlbumsAPI = (function(apiUtils) {
  
  /**
   * Get albums from backend
   * @param {string} ? - ?
   * 
   *  *************
   *  Usage Example
   *  *************
   * 
   *  AlbumsAPI.getAlbums()
        .then(function(response){
          if (response.ok) {
            response.json().then(function(data) {
              console.log(data);
            })
          } else {
            console.log('There was an error searching albums. Error status = ', response.status)
          }
        })
   */
  var getAlbums = function() {
    return fetch(apiUtils.API_URL + "/search?q=" + 'AC DC', {
      method: apiUtils.METHODS.GET,
      headers: apiUtils.HeaderFactory(),
      // body: JSON.stringify({ bodyAttr: email, password: password })
    })
  }

  return {
    getAlbums: getAlbums
  }

}(API_UTILS))
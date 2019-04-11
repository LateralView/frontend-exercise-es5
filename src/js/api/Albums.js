/**
 * Albums API handlers
 */
var AlbumsAPI = (function(apiUtils) {
  
  /**
   * Authenticate into the application
   * @param {string} email - Email to log into the application
   * @param {string} password - Password to log into the application
   */
  var getAlbums = function() {
    return fetch(apiUtils.API_URL + "/search?q=" + 'La vela puerca', {
      method: apiUtils.METHODS.GET,
      headers: apiUtils.HeaderFactory(),
      // body: JSON.stringify({ email: email, password: password })
    })
  }

  return {
    getAlbums: getAlbums
  }

}(API_UTILS))
/**
 * Script to handle everything that happens on the Home page
 * - User's interactions
 * - Events handlers
 */
var HomePage = (function($, albumsAPI) {

  return {
    /**
     * Initializes all elements events for user interactions.
     */
    InitializeEvents: function() {

      // Search button click handler.
      $('#search').on('click', function() {
        albumsAPI.getAlbums()
          .then(function(result){
            if (result.ok) {
              result.json().then(function(data){
                console.log('data', data)
              })
            } else {
              console.log('search error', result.error)
            }
          })
      })

    }

  }

}(jQuery, AlbumsAPI))
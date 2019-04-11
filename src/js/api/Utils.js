var API_UTILS = (function() {

  var API_URL = 'http://localhost:5000'

  /**
   * Common HTTP Methods used
   */
  var METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
    HEAD: 'HEAD'
  }

  /**
   * Generate the headers needed for the requests
   * @param {String} token - Token used on Authentication
   */
  var HeaderFactory = function(token) {
    var headers = new Headers()
    headers.append('Content-Type', 'application/json')
    if (token) headers.append('x-access-token', token)
    return headers
  }

  return {
    HeaderFactory: HeaderFactory,
    METHODS: METHODS,
    API_URL: API_URL
  }
}())
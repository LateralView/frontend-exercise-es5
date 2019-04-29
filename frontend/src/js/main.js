'use strict';

/**
 * initialize application routes and events
 */
(function (homePage) {
  function init() {
    var router = new Router([
      new Route('home', 'home.html', true, homePage.InitializeEvents),
      new Route('about', 'about.html')
    ]);
  }
  init();
}(HomePage));

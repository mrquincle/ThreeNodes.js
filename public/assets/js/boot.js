
require.config({
  paths: {
    jQuery: 'loaders/jquery-loader',
    Underscore: 'loaders/underscore-loader',
    Backbone: 'loaders/backbone-loader'
  }
});

require(['order!threenodes/App', 'order!libs/jquery-1.6.4.min', 'order!libs/underscore-min', 'order!libs/backbone'], function(App) {
  "use strict";
  var app;
  return app = new App();
});

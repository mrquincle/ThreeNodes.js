
define(['jQuery', 'Underscore', 'Backbone'], function($, _, Backbone) {
  return ThreeNodes.CSLoginCommand = (function() {

    function CSLoginCommand() {}

    CSLoginCommand.prototype.execute = function() {
      var ident;
      ident = 123;
      return $.ajax({
        url: 'cslogin',
        data: 'id=' + ident,
        success: function(data, status, request) {
          return window.location.href = "http://api.sense-os.nl/oauth/authorize?oauth_token=" + data;
        }
      });
    };

    return CSLoginCommand;

  })();
});

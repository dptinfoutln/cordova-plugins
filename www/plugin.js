var exec = require('cordova/exec');

var PLUGIN_NAME = 'CustomAlertPlugin';

var CustomAlertPlugin = {
 showAlert: function(title, content) {
  exec(null, null, PLUGIN_NAME, 'showAlert', [title, content]);
 }
};

module.exports = CustomAlertPlugin;

// Module loader (RequireJS).
// Load 'cordova/exec' to execute a specifc method.
// Exec is like a bridge between native code and JavaScript
var exec = require('cordova/exec');

// Plugin name defined in `plugin.xml`
const PLUGIN_NAME = 'AlertPlugin'

// Export a public function.
exports.showAlert = function(title, content, success, error) {
 exec(success, error, PLUGIN_NAME, 'showAlert', [title, content]);
};

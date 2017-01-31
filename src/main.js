// SETTINGS
// TODO: Load these from a webapp or something
var settings = require('./secret.js')()
var imap = require('./imap')(settings, function(msgs) {
	console.log(msgs);
});
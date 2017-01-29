var IMAP = require('imap');
var settings = require('./secret.js')()

var imap = new IMAP(settings);
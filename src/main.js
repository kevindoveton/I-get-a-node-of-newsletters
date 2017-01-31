var MailParser = require('mailparser').MailParser;


var emailData = [];

// SETTINGS
// TODO: Load these from a webapp or something
var settings = require('./secret.js')()
var imap = require('./imap')(settings, function(msgs) {
	// console.log(msgs[0]);
	for (var i = 0; i < msgs.length; i++) {
		var mailparser = new MailParser();
		mailparser.write(msgs[i]);
		mailparser.end();
		mailparser.on('end', function(mailobject) {
			emailData.push(mailobject);
			// console.log(mailobject);
		});
	}
});



function renderEmail(emails) {
	var data = {
		emails: emails
	};
	console.log(data);
	console.log(data.emails)
	var render = require('./render')(data);
}

setTimeout(function(){renderEmail(emailData)}, 7000)
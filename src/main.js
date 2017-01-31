var MailParser = require('mailparser').MailParser;
var mailparser = new MailParser();

var emailData = [];

// SETTINGS
// TODO: Load these from a webapp or something
var settings = require('./secret.js')()
var imap = require('./imap')(settings, function(msgs) {
	// console.log(msgs[0]);
	for (var i = 0; i < msgs.length; i++) {
		mailparser.write(msgs[i]);
		mailparser.end();
	}
});
// renderEmail({emails: emailData});

mailparser.on('end', function(mailobject) {
	emailData.push(mailobject);
	// console.log(mailobject);
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
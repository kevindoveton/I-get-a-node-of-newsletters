var MailParser = require('mailparser').MailParser;

var emailData = []; // an array of parsed email objects

// SETTINGS
// TODO: Load these from a webapp or something
var settings = require('./secret.js')()
var imap = require('./imap')(settings, function(msgs) {
	var counter = 0;
	
	for (var i = 0; i < msgs.length; i++) {
		// a new instance needs to be created each loop
		var mailparser = new MailParser();
		mailparser.write(msgs[i]);
		mailparser.end();
		
		mailparser.on('end', function(mailobject) {
			emailData.push(mailobject);
			
			// call the render function 
			// once all emails parsed
			counter++;
			if (counter == msgs.length) {
				renderEmail(emailData);
			}
			
		}); // end on('end')
		
	} // end for
	
}); // end imap callback



function renderEmail(emails) {
	var data = {
		emails: emails
	};
	
	var render = require('./render')(data);
}

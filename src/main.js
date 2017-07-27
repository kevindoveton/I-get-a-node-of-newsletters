var sendEmail = function() {
	var MailParser = require('mailparser').MailParser;
	console.log(process.env.AWS_SECRET_KEY)
	// SETTINGS
	// TODO: Load these from a webapp or something
	const settings = require('./secret.js')()

	var emailData = []; // an array of parsed email objects

	var imap = require('./imap')(settings.imapConfig, function(msgs) {
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
					
					/* 
					 * DEBUGGING
					 * write the mailobject to file
					*/ 
					// const fs = require('fs');
					// fs.writeFile(__dirname + '/../emails.json', JSON.stringify(emailData));
				}
				
			}); // end on('end')
			
		} // end for
		
	}); // end imap callback
}


function renderEmail(emails) {
	var data = {
		emails: emails
	};
	
	var render = require('./render')(data);
	var sendEmail = require('./sendEmail')(render);
	
	/* 
	 * DEBUGGING
	 * write the render to file
	*/ 
	// const fs = require('fs');
	// fs.writeFile(__dirname + '/../cache/index.html', render);
}

module.exports = sendEmail;

// imap.js
// connect to an imap inbox and return a
// mime array of the most recent emails


// DEPENDENCIES
var Imap = require('imap');
var inspect = require('util').inspect;
var mailparser = require('mailparser');

/*
 * Usage:
 * var imap = require('./imap');
 * imap(settings, callback)
 *
 * settings: {
 *	 user: 'email@example.com',
 *	 password: 'password',
 *	 host: 'mail.example.com',
 *	 port: 143,
 *	 tls: false,
 *	 autotls: 'always'
 * }
 *
 * callback(messageObject)
*/
module.exports = function(settings, callback) {
	if (settings == undefined) {
		throw new Error("settings must be defined");
	}
	
	var imap = new Imap(settings);

	function openInbox(callback) {
		imap.openBox('INBOX', true, callback);
	}

	imap.once('ready', function() {
		openInbox(function(err, box) {
			if (err) throw err;  
			
			var yesterday = new Date(); // well today at the moment
			yesterday.setDate(yesterday.getDate() - 5);
			
			imap.search([['SINCE', yesterday]], function(error, results) {
				if (error) throw error;
				var msgs = []; // array of message objects, this is returned in callback
				
				var f = imap.fetch(results, { bodies: '' });
				
				// Imap Message
				f.on('message', function(msg, seqno) {
					// console.log('Message #%d', seqno);
					var prefix = '(#' + seqno + ') ';
				
			    	msg.on('body', function(stream, info) {
						var buffer = "";
						stream.on('data', function(chunk) {
							buffer += chunk.toString('utf8');
						})
						
						stream.once('end', function() {
							msgs.push(buffer);
						});
			    	});
			    
					msg.once('end', function() {

			    	});
				});
				
				// Fetch Error
		  		f.once('error', function(err) {
		  			console.log('Fetch error: ' + err);
		  		});
				
				// Fetch End
		  		f.once('end', function() {
		  			imap.end();
					callback(msgs);
		  		});
				
			}); // End Imap Search
		}); // End openInbox
	}) // end imap ready

	// IMAP Error
	imap.once('error', function(err) {
		console.log(err);
	});

	// IMAP Connection Closed
	imap.once('end', function() {
		console.log('Connection ended');
	});

	// IMAP Connect
	imap.connect();
}
// imap.js
// connect to an imap inbox and return a
// mime array of the most recent emails


// DEPENDENCIES
var Imap = require('imap');
var inspect = require('util').inspect;
var mailparser = require('mailparser');

// START OF CODE
 

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
			yesterday.setDate(yesterday.getDate() - 2);
			
			imap.search([['SINCE', yesterday]], function(error, results) {
				if (error) throw error;
				
				// var f = imap.fetch(results, { bodies: 'HEADER.FIELDS (FROM SUBJECT)' });
				var f = imap.fetch(results, { bodies: '' });
				var msgs = [];
				// Imap Message
				f.on('message', function(msg, seqno) {
					// console.log('Message #%d', seqno);
					var prefix = '(#' + seqno + ') ';
				
			    	msg.on('body', function(stream, info) {
						var buffer = "";
						stream.on('data', function(chunk) {
							buffer += chunk.toString('utf8');
						})
					// 	// stream.pipe(process.stdout);
					// 	var fs = require('fs');
					// 	stream.pipe(fs.createWriteStream('msg-'+seqno+'-boxy.txt'));
						stream.once('end', function() {
							msgs.push(buffer);
						});
			    	});
					//   
					// msg.once('attributes', function(attrs) {
					// 	console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
				    // });
			    
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
// DEPENDENCIES
var Imap = require('imap');
var inspect = require('util').inspect;
var mailparser = require('mailparser');

// SETTINGS
// TODO: Load these from a webapp or something
var settings = require('./secret.js')()

// START OF CODE
var imap = new Imap(settings);

function openInbox(callback) {
	imap.openBox('INBOX', true, callback);
}

imap.once('ready', function() {
	openInbox(function(err, box) {
		if (err) throw err;
	  
		// get the last message
		var f = imap.seq.fetch(box.messages.total + ':*', { bodies: ['HEADER.FIELDS (FROM)','TEXT'] });
	  
		f.on('message', function(msg, seqno) {
			console.log('Message #%d', seqno);
			var prefix = '(#' + seqno + ') ';
		
	    	msg.on('body', function(stream, info) {
				stream.pipe(process.stdout);
	    	});
	    
			msg.once('attributes', function(attrs) {
				console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
		    });
	    
			msg.once('end', function() {
				console.log(prefix + 'Finished');
	    	});
		});
	  
		f.once('error', function(err) {
			console.log('Fetch error: ' + err);
		});
	  
		f.once('end', function() {
			console.log('Done fetching all messages!');
			imap.end();
		});
	});
})

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
// findNewsletters.js
// determine if a email is a newsletter...

var checkEmail = function(email) {
	// probably wont have a text only email from
	// a marketing campaign
	if (email.html == undefined) return false;
	
	// Search the headers
	if (email.from[0].address.search(/noreply/i) !== -1)
		return true;
	
	// Search the text for keywords
	// ----------------------------
	// search for unsubscribe
	if (email.html.search(/unsubscribe/i) !== -1)
		return true;
	
	// search for opt out
	if (email.html.search(/opt out/i) !== -1)
		return true;
	
	if (email.html.search(/subscription/i) !== -1)
		return true;

	if (email.html.search(/auto generated/i) !== -1)
		return true;
	
	// nothing found.. maybe its not a newsletter
	return false;
}

/* 
 * DEBUGGING
 * read the mailobject from file
*/ 
const fs = require('fs');
var emails = JSON.parse(fs.readFileSync(__dirname + '/../emails.json', 'utf8'));

for (var i = 0; i < emails.length; i++) {
	// console.log(i)
	console.log(checkEmail(emails[i]));
}





module.exports = checkEmail
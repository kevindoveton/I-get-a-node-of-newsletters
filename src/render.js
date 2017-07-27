// render.js
// return a valid email based on a 
// pug template with css inline
var screenshot = require('./screenshot');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({apiVersion: '2006-03-01'});
const fs = require('fs');
const pug = require('pug');
const sass = require('./sass')

// compile the pug template so we can reuse it
var fn = pug.compileFile('./src/emailTemplate/Summary.pug', {basedir: __dirname});

/* 
 * USAGE: 
 * var emails = { emails: [{from: [object], subject: 'subject'}] }
 * var result = render(emailObject);
*/
module.exports = function(emails) {
	for (var i = 0; i < emails.emails.length; i++) {
		let imgName = uid();
		
		if (emails.emails[i].html !== undefined) {
			new screenshot(emails.emails[i].html, imgName).then(() => {
				fs.readFile(__dirname+'/../cache/'+imgName+'.jpg', (err, data) => {
					if (err) { throw err; }
					let base64data = new Buffer(data, 'binary');

					let s3 = new AWS.S3();
					s3.putObject({
						Bucket: 'kd-newsletters',
						Key: imgName+'.jpg',
						Body: base64data,
						ACL: 'public-read'
					}, (err, data) => {
						console.log(data);
						console.log('Successfully uploaded package.');
					});
				});
			});
			emails.emails[i].img = 'https://s3-ap-southeast-2.amazonaws.com/kd-newsletters/'+imgName+'.jpg';
		}
	}
	emails.emails = arrayTo2DArray(emails.emails, 2)
	var out = fn(emails);
	const fs = require('fs');
	fs.writeFile(__dirname + '/../cache/index.html', out);
	const css = sass('./src/emailTemplate/sass/style.sass');
	
	var inlineify = require('./inlineify')(out, css);
	
	return inlineify;
};

// converts a array to a 2d array
function arrayTo2DArray (list, howMany) {
		var result = [];
		while(list[0]) { 
				result.push(list.splice(0, howMany)); 
		}
		return result;
}

// uid
// returns 25 random characters
function uid() {
		return Math.random().toString(36).substring(2);
}

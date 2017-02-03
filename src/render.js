// render.js
// return a valid email based on a pug template
// with css inline
var screenshot = require('./screenshot');

const pug = require('pug');
const sass = require('./sass')

// compile the pug template so we can reuse it
var fn = pug.compileFile('./src/views/index.pug', {basedir: __dirname});

/* 
 * USAGE: 
 * var emails = { emails: [{from: [object], subject: 'subject'}] }
 * var result = render(emailObject);
*/
module.exports = function(emails) {
	for (var i = 0; i < emails.emails.length; i++) {
		var imgName = uid();
		
		if (emails.emails[i].html !== undefined) {
			new screenshot(emails.emails[i].html, imgName);
			emails.emails[i].imgName = imgName;
		}
	}
	emails.emails = arrayTo2DArray(emails.emails, 2)
	var out = fn(emails);
	
	const css = sass('./src/views/sass/style.sass');
	
	var inlineify = require('./inlineify')(out, css);
	
	return inlineify;
};

function arrayTo2DArray (list, howMany) {
    var result = [];
    while(list[0]) { 
        result.push(list.splice(0, howMany)); 
    }
    return result;
}

function uid() {
    return ("0000" + (Math.random()*Math.pow(36,4) << 0).toString(36)).slice(-4)
}
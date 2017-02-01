// render.js
// return a valid email based on a pug template
// with css inline

const pug = require('pug');

// compile the pug template so we can reuse it
var fn = pug.compileFile('./src/views/Summary.pug', {basedir: __dirname});


// var emails = { emails: [{from: [object], subject: 'subject'}] }
// var result = render(emailObject);
module.exports = function(emails) {
	var out = fn(emails);
	var inlineify = require('./inlineify')(out, '');
	
	return inlineify;
};
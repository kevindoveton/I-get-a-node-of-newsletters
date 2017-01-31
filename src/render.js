var pug = require('pug');

// var emails = {emails: [
// 	{
// 		subject: 'hello',
// 		from: 'kevin'
// 	},
// 	{
// 		subject: 'hello',
// 		from: 'kevin'
// 	},
// 	{
// 		subject: 'hello',
// 		from: 'kevin'
// 	},
// 	{
// 		subject: 'hello',
// 		from: 'kevin'
// 	},
// 	{
// 		subject: 'chocolate',
// 		from: 'frank'
// 	},
// 	{
// 		subject: 'go away',
// 		from: 'Jarred'
// 	}
// ]}

var fn = pug.compileFile('./src/views/Summary.pug', {basedir: __dirname});

module.exports = function(emails) {
	var out = fn(emails);
	console.log(out);
	console.log("----------");
	var inlineify = require('./inlineify')(out, '');
	console.log(inlineify);
};
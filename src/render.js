var pug = require('pug');

var emails = {emails: [
	{
		subject: 'hello',
		from: 'kevin'
	},
	{
		subject: 'hello',
		from: 'kevin'
	},
	{
		subject: 'hello',
		from: 'kevin'
	},
	{
		subject: 'hello',
		from: 'kevin'
	},
	{
		subject: 'chocolate',
		from: 'frank'
	},
	{
		subject: 'go away',
		from: 'Jarred'
	}
]}

var fn = pug.compileFile('./views/Summary.pug', {basedir: __dirname});

var out = fn(emails);

console.log(out);
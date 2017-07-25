module.exports = function(app, express) {
	// static files
	app.use('/cache', express.static('cache'));
	
	// home page
	app.get('/', function (req, res) {
		res.render('index');
	});
	
	app.get('/dev', function (req, res) {
		var sass = require('../sass')('src/emailTemplate/sass/style.sass', ['src/emailTemplate/sass/includes']);
		const pug = require('pug');
		// var fn = pug.compileFile('./src/emailTemplates/views/index.pug');
		const fs = require('fs');
		var email = fs.readFileSync(__dirname + '/../../cache/index.html', 'utf8');
		var inlineify = require('../inlineify')
		var result = inlineify(email, sass);
		res.send(result);
	});
	
	app.get('/test', function (req, res) {
		res.render('index')
	});
	
	app.get('/test/send', function(req, res) {
		require('../main')();
		res.render('sent');
	})
}

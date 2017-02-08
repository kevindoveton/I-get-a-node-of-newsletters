module.exports = function(app, express) {
	// static files
	app.use('/cache', express.static('cache'));
	
	// home page
	app.get('/', function (req, res) {
		res.render('index');
	});
	
	app.get('/dev', function (req, res) {
		var sass = require('../sass')('src/webserver/views/sass/styles.sass', ['src/webserver/views/sass/includes']);
		const pug = require('pug');
		var fn = pug.compileFile('./src/webserver/views/index.pug');
		
		var inlineify = require('../inlineify')
		var result = inlineify(fn(), sass);
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

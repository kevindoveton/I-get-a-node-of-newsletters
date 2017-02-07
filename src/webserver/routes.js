module.exports = function(app, express) {
	// static files
	app.use('/cache', express.static('cache'));

	// aux home page
	app.get('/', function (req, res) {
		res.send('no service available');
	});
	
	app.get('/test', function (req, res) {
		res.render('index')
	});
	
	app.get('/test/send', function(req, res) {
		require('../main')();
		res.render('sent');
	})
}

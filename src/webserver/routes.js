module.exports = function(app, express) {
	// static files
	app.use('/static', express.static('cache'));

	// aux home page
	app.get('/', function (req, res) {
		res.send('no service available');
	});
}

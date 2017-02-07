// vendor
const express = require('express');
const app = express();
const server = require('http').createServer(app);

module.exports = function(port) {
	if (port == undefined) {
		port = 8000;
	}
	
	// view engine
	app.set('view engine', 'pug')
	app.set('views', './src/webserver/views')
	
	// user
	const routes = require("./routes");
	
	// routes
	routes(app, express);
	
	// server
	server.listen(port, function() {
		console.log("Server listening on " + 8000);
	});
}

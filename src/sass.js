// sass.js
// wrapper around node-sass
// require path to a indented sass file
// returns the file as a css string

const sass = require('node-sass')


/*
 * Usage:
 * const sass = require('./sass');
 * var css = sass('./style.sass');
*/
module.exports = function(file, includes) {	
	if (includes == undefined) {
		includes = [
			'./views/sass/'
		];
	}
	var result = sass.renderSync({
		indentedSyntax: true,
		outputStyle: 'compressed',
		includePaths: includes,
		file: file
	});
	
	if (result !== undefined) {
		if (result.css !== undefined) {
			// css is a buffer
			// convert it to string
			return result.css.toString('utf8');
		}
	}
}
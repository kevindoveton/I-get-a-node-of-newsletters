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
module.exports = function(file) {
	var result = sass.renderSync({
		indentedSyntax: true,
		outputStyle: 'compressed',
		includePaths: [
			'./views/sass/'
		],
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
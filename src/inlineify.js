// inlineify.js
// basically just overloading juice
// returns html code with css inline
const juice = require('juice');

/*
 * Usage:
 * const inlineify = require('./inlineify');
 * var result = inlineify(html, css)
*/
module.exports = function(html, css) {
	if (css == undefined) {
		css = '';
	}
	var options = {
		extraCss: css
	}
	return juice(html, options)
}
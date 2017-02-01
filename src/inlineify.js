// inlineify.js
// basically just overloading juice

const juice = require('juice');

// var result = inlineify(html, css)
// returns html code with css inline
module.exports = function(html, css) {
	if (css == undefined) {
		css = '';
	}
	var options = {
		// extraCss: "li {border: 1px solid; font-size: 2em} h1 {font-size: .5em} h2 {font-size 1em}"
		extraCss: css
	}
	return juice(html, options)
}
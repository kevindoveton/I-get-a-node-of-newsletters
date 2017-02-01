var juice = require('juice');

var options = {
	extraCss: "li {border: 1px solid; font-size: 2em} h1 {font-size: .5em} h2 {font-size 1em}"
}


module.exports = function(html, css) {
	return juice(html, options)
}
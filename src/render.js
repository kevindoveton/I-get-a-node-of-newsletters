// render.js
// return a valid email based on a pug template
// with css inline

const pug = require('pug');

// compile the pug template so we can reuse it
var fn = pug.compileFile('./src/views/Summary.pug', {basedir: __dirname});


// var emails = { emails: [{from: [object], subject: 'subject'}] }
// var result = render(emailObject);
module.exports = function(emails) {
	emails.emails = arrayTo2DArray(emails.emails, 2)
	var out = fn(emails);
	var css = "*{margin:0;padding:0}div.container{font-family:'Helvetica', 'Verdana', 'Sans Serif';width:800px}div.title{background-color:#111;color:white}div.title h1{padding:1em;text-align:center}div.row{display:block;width:670px;margin:auto}div.row:first-of-type{margin-top:.5em}div.item{display:inline-block;width:300px;margin:.5em 1em}div.item img{max-width:300px;max-height:300px;-webkit-border-bottom-left-radius:10px;border-bottom-left-radius:10px;-webkit-border-bottom-right-radius:10px;border-bottom-right-radius:10px}div.item h1,div.item h2{background-color:#333;color:#fff;padding-left:10px;padding-right:10px;height:1.3em;overflow:hidden}div.item h1{-webkit-border-top-right-radius:10px;border-top-right-radius:10px;-webkit-border-top-left-radius:10px;border-top-left-radius:10px;padding-top:10px;font-size:1.5em}div.item h2{padding-bottom:10px;font-size:1em}"
	
	var inlineify = require('./inlineify')(out, css);
	
	return inlineify;
};

function arrayTo2DArray (list, howMany) {
    var result = [];
	var input = list.slice(0); 
    while(input[0]) { 
        result.push(input.splice(0, howMany)); 
    }
    return result;
}

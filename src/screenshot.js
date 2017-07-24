// screenshot.js
// take a screenshot of some html code
// creates a file asynchronously scaled 
// to 313px x 313px

var webshot = require('webshot');
var fs = require('fs');
var lwip = require('pajk-lwip');

var options = {
	siteType: 'html',
	screenSize: { // size of the browser
		width: 1000,
		height: 1000
	},
	shotSize: { // size of the png
		width: 'window',
		height: 'window'
	}
}

module.exports = function(email, name) {
	webshot(email, 'cache/'+name+'.png', options, function(err) {
		if (err != undefined) console.log(err);
	  	// screenshot now saved to cache as png
		scaleImage(name);
	}); // end webshot

} // end module.exports

// TODO: Surely there is a more efficient way to do this
function scaleImage(name) {
	lwip.open(__dirname+'/../cache/'+name+'.png', function(err, image){
		if (err != undefined) console.log(err);
		
		lwip.create(image.width(), image.height(), 'white', function(err, canvas) {
			if (err != undefined) console.log(err);
			
			canvas.paste(0,0,image, function(err, img) {
				if (err != undefined) console.log(err);
				// image = null; // force gc
				
				img.contain(313,313, function(err, i) {
					if (err != undefined) console.log(err);
					// canvas = null; // force gc
					
					i.writeFile(__dirname+'/../cache/'+name+'.jpg', 'jpg', {quality: 75}, function(err) { 
						// img = null; // force gc
						if (err != undefined) console.log(err);
						
						fs.unlink(__dirname+'/../cache/'+name+'.png'); // delete the png file
					}); // end image.writeFile
				}); // end image.writeFile
			}); // end canvas.paste
		}); // end lwip.create
	}); // end lwip.open
}
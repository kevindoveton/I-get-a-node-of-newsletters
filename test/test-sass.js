const assert = require('assert');


describe('sass', function() {
	
	it('should return valid css', function() {
		// setup
		const fs = require('fs');
		fs.writeFileSync('test.sass', 'h1\n  font-size: 3em');
		
		// actual work
		var result = require('../src/sass')('test.sass');
		var expected = 'h1{font-size:3em}\n'
		assert.equal(expected, result);
		
		// packup
		fs.unlink('test.sass');
	});
	
}); // end descibe
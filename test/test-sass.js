const assert = require('assert');


describe('sass', function() {
	
	it('should return valid css', function() {
		const fs = require('fs');
		fs.writeFileSync('test.sass', 'h1\n  font-size: 3em');
		var result = require('../src/sass')('test.sass');
		var expected = 'h1{font-size:3em}\n'
		assert.equal(expected, result);
		fs.unlink('test.sass');
	});
	
}); // end descibe
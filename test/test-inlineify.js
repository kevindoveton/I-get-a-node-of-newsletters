const assert = require('assert');


describe('inlineify', function() {
	
	it('should work with no css', function() {
		var result = require('../src/inlineify')('<h1>hello</h1>');
		var expected = '<h1>hello</h1>'
		assert.equal(expected, result);
	});
	
	it('should work with css', function() {
		var result = require('../src/inlineify')('<h1>hello</h1>', 'h1{font-size: 3px}');
		var expected = '<h1 style="font-size: 3px;">hello</h1>'
		assert.equal(expected, result);
	});
	
}); // end describe
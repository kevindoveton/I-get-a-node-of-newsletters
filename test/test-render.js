const assert = require('assert');
const rewire = require('rewire');

describe('render', function() {
	var render = rewire('../src/render');
	
	describe('uid', function() {
		
		it('should be 25 characters', function() {
			var render = rewire('../src/render');
			uid = render.__get__('uid');
			
			var expected = 20;
			var result = uid().length
			
			assert.equal(expected, result);
		});
		
		it('should be random', function() {
			uid = render.__get__('uid');
			
			assert.equal(true, (uid() !== uid()));
		});
		
	}); // end descibe uid
	
	describe('arrayTo2DArray', function() {
		it('should convert a single array to a 2d array', function() {
			arrayTo2DArray = render.__get__('arrayTo2DArray');
			
			var expected = [ [1, 2 ], [3, 4 ] ];
			var result = arrayTo2DArray([1,2,3,4], 2);

			assert.deepEqual(expected, result);
		});
		
		it('should work for different value arrays', function() {
			
			arrayTo2DArray = render.__get__('arrayTo2DArray');
			
			var expected = [ [1, 2, 3], [4, 5, 6] ];
			var result = arrayTo2DArray([1,2,3,4,5,6], 3);

			assert.deepEqual(expected, result);
			
		});
	}); // end descibe arrayTo2DArray
	
}); // end descibe render
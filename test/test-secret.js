const assert = require('assert');

describe('secret.js', function() {
	var secret = require('../src/secret.example')();
	
	describe('imapConfig', function() {
		it('should return a username', function() {
			assert.equal(true, typeof secret.imapConfig.user !== 'undefined');
		});
		
		it('should return a password', function() {
			assert.equal(true, typeof secret.imapConfig.password !== 'undefined');
		});
		
		it('should return a host', function() {
			assert.equal(true, typeof secret.imapConfig.host !== 'undefined');
		});
		
		it('should return a port', function() {
			assert.equal(true, typeof secret.imapConfig.port !== 'undefined');
		});
	});
	
	describe('smtpConfig', function() {
		it('should return a username', function() {
			assert.equal(true, typeof secret.smtpConfig.auth.user !== 'undefined');
		});
		
		it('should return a password', function() {
			assert.equal(true, typeof secret.smtpConfig.auth.pass !== 'undefined');
		});
		
		it('should return a host', function() {
			assert.equal(true, typeof secret.smtpConfig.host !== 'undefined');
		});
		
		it('should return a port', function() {
			assert.equal(true, typeof secret.smtpConfig.port !== 'undefined');
		});
	});
	
	describe('messageConfig', function() {
		it('should return a from name', function() {
			assert.equal(true, typeof secret.messageConfig.from.name !== 'undefined');
		});
		
		it('should return a from email address', function() {
			assert.equal(true, typeof secret.messageConfig.from.address !== 'undefined');
		});
		
		it('should return a to address', function() {
			assert.equal(true, typeof secret.messageConfig.to !== 'undefined');
		});
		
		it('should return a subject', function() {
			assert.equal(true, typeof secret.messageConfig.subject !== 'undefined');
		});
	});
}); // end describe

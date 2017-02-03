const assert = require('assert');


describe('findNewsletters', function() {
	var findNewsletters = require('../src/findNewsletters');
	
	describe('checkEmail()', function() {
		
		// email
		it('should return false when the email is null', function() {
			assert.equal(false, findNewsletters(null));
		});
		
		it('should return false when the email is undefined', function() {
			assert.equal(false, findNewsletters(undefined));
		});
		
		// email.html
		it('should return false when the email.html is null', function() {
			assert.equal(false, findNewsletters({html: null}));
		});
		
		it('should return false when the email.html is undefined', function() {
			assert.equal(false, findNewsletters({html: undefined}));
		});
		
		it('should return false when the email.html is ""', function() {
			assert.equal(false, findNewsletters({html: ""}));
		});
		
		// email.from
		it('should return true when the email.from[0].address contains noreply', function() {
			assert.equal(true, findNewsletters({from: [{address: "noreply@gmail.com", name: "noreply"}], html:"this is an email"}));
		});
		
		it('should return true when the email.from[0].address contains no-reply', function() {
			assert.equal(true, findNewsletters({from: [{address: "no-reply@gmail.com", name: "noreply"}], html:"this is an email"}));
		});
		
		it('should return true when the email.from[0].name contains noreply', function() {
			assert.equal(true, findNewsletters({from: [{address: "hello@gmail.com", name: "noreply"}], html:"this is an email"}));
		});
		
		it('should return true when the email.from[0].name contains no-reply', function() {
			assert.equal(true, findNewsletters({from: [{address: "hello@gmail.com", name: "no-reply"}], html:"this is an email"}));
		});
		
		// email.html
		it('should return true when the email.html contains unsubscribe', function() {
			assert.equal(true, findNewsletters({from: [{address: "hello@gmail.com", name: "hello"}], html:"did you want to unsubscribe?"}));
		});

		it('should return true when the email.html contains opt out', function() {
			assert.equal(true, findNewsletters({from: [{address: "hello@gmail.com", name: "hello"}], html:"did you want to opt out?"}));
		});
		
		it('should return true when the email.html contains subscription', function() {
			assert.equal(true, findNewsletters({from: [{address: "hello@gmail.com", name: "hello"}], html:"thanks for your subscription."}));
		});
		
		it('should return true when the email.html contains auto generated', function() {
			assert.equal(true, findNewsletters({from: [{address: "hello@gmail.com", name: "hello"}], html:"this email was auto generated!"}));
		});

	});
});

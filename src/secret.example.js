module.exports = function() {
	return {
		imapConfig: {
			user: 'email@example.com',
			password: 'password',
			host: 'mail.example.com',
			port: 143,
			tls: false,
			autotls: 'always'
		},
		
		smtpConfig: {
			host: 'mail.example.com',
		    port: 587,
		    secure: false, // upgrade later with STARTTLS
		    auth: {
		        user: 'newsletters@example.com',
		        pass: 'password'
		    }
		},
		
		messageConfig: {
			from: {
				name: "Newsletters",
				address: "newsletters@example.com"
			},
			to: "email@you.com",
			subject: "Your daily summary..."
		}

	}
}
var nodemailer = require('nodemailer');

var settings = require('./secret.js')();

module.exports = function(html) {
	settings.messageConfig.html = html;
	
	var transporter = nodemailer.createTransport(settings.smtpConfig);

	transporter.verify(function(err, succ) {
		if (err) {
			console.log("error");
			console.log(err)
		}
		else {
			transporter.sendMail(settings.messageConfig, function(err, info){
				if (err !== null) {
					console.log("error");
					console.log(err);
				}
				else {
					console.log("Message probably sent");
					console.log(info);
				}
			})
		}
	})
}
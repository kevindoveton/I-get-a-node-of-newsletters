module.exports = function() {
  const DB_URI = process.env.NODE_ENV == 'production' ? 'mongodb://mongodb/newsletters' : 'mongodb://localhost/newsletters';
  
  
  const mongoose = require('mongoose');
  const uniqueValidator = require('mongoose-unique-validator');

  mongoose.Promise = global.Promise;
  
  mongoose.connect(DB_URI);

  // CONNECTION EVENTS
  // When successfully connected
  mongoose.connection.on('connected', function () {  
    console.log('Mongoose default connection open to ' + DB_URI);
  }); 

  // If the connection throws an error
  mongoose.connection.on('error',function (err) {  
    console.log('Mongoose default connection error: ' + err);
  }); 

  // When the connection is disconnected
  mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected'); 
  });

  // If the Node process ends, close the Mongoose connection 
  process.on('SIGINT', function() {  
    mongoose.connection.close(function () { 
      console.log('Mongoose default connection disconnected through app termination'); 
      process.exit(0); 
    }); 
  }); 

  const USER_SCHEMA = mongoose.Schema({
    username: {
      type: String, 
      lowercase: true,
      unique: true
    },
    password: String,
    facebookId: String,
    email: {
      type: String,
      lowercase: true,
      unique: true
    },
    salt: String,
    preferredTime: Date
  });
  USER_SCHEMA.plugin(uniqueValidator);
  const User = mongoose.model('User', USER_SCHEMA)

}

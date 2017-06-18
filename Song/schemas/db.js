/**
 * Created by kaka on 5/13/2017.
 */
var mongoose = require("mongoose");
var db_url = "mongodb://localhost:27017/Song";
mongoose.connect(db_url);

/**
  * Connect Successfully
  */
mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + db_url);
});

/**
 *  Have an exception in connect the database
 */
mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});

/**
 * Disconnect the database
 */
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});


var songSchema = new mongoose.Schema({
  name:  String,
  author: String,
  style:   String,
  comments: [{ content: String, date: Date }],
  date: { type: Date },
  language: String,
  description: String,
  rate : Number
});

var userSchema = new mongoose.Schema({
    username : String,
    password : String
})


var songModel = mongoose.model('songModel', songSchema);
var  userModel = mongoose.model('userModel', userSchema);

module.exports = {
    songModel : songModel,
    userModel : userModel
}
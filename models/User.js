var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    email: {type: String},
    password: {type: String},
    createdOn: {type: Date,default:Date.now},
  }
);
module.exports = mongoose.model('User', UserSchema);

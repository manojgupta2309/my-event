var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var QuerySchema = new Schema(
  {
    name: {type: String},
    email: {type: String},
    message: {type: String},
    createdOn: {type: Date,default:Date.now},
  }
);
module.exports = mongoose.model('Query', QuerySchema);

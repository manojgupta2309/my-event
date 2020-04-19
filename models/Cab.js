var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CabSchema = new Schema(
  {
    eventName: {type: String},
    sponsorName: {type: String},
    location: {type: String},
    description: {type: String},
    joined: {type: Number,default:0},
    joiners : { type : Array , default : [] },
    likes: {type: Number,default:0},
    likers : { type : Array , default : [] },
    createdOn: {type: Date,default:Date.now},
  }
);
module.exports = mongoose.model('Cab', CabSchema);

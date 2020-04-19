var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var BookingSchema = new Schema(
  {
    email:{type: String},
    driver_name: {type: String},
    driver_number: {type: String},
    cab_number: {type: String},
    cab_type:{type: String},
    start:{type: String},
    end:{type: String},
    booking_time: {type: Date , default:Date.now},
  }
);
module.exports = mongoose.model('Booking', BookingSchema);

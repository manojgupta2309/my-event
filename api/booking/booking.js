const router = require('express').Router();
const Booking = require('../../models/Booking')

router.get('/', function (req, res) {
 
    Booking.find({email:req.email}, (err, booking) => {
        if (err) {
          res.status(500).send(err);
        }
        res.status(200).json(booking);
      });
 

})
router.get('/:id', function (req, res) {
  
    Booking.find({ _id: req.params.id }, (err, booking) => {
        if (err) {
          res.status(500).send(err);
        }
        res.status(200).json(booking);
      });

})
router.post('/', function (req, res) {
    let bookingObj = req.body
    bookingObj.email = req.email
    let newBooking= new Booking(bookingObj);
    newBooking.save((err, booking) => {
    if (err) {
      res.status(500).send(err);
    }
    else
    res.status(201).send({status:"success",message:"booking created successfully",booking:booking})
  });

})
router.delete('/:id', function (req, res) {
 
    Booking.remove({ _id: req.params.id }, (err, booking) => {
       if (err) {
         res.status(404).send(err);
       }
       res.status(200).json({"message":"Booking deleted successfully"});
     });
  
})





module.exports = router;
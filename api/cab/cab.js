const router = require('express').Router();
const Cab = require('../../models/Cab')

router.get('/:start', function (req, res) {
  console.log(req.params.start)
 
    Cab.find({location:req.params.start}, (err, cab) => {
        if (err) {
          res.status(500).send(err);
        }
        res.status(200).json(cab);
      });
  

})
router.get('/', function (req, res) {
  console.log(req.params.start)
 
    Cab.find({}, (err, cab) => {
        if (err) {
          res.status(500).send(err);
        }
        res.status(200).json(cab);
      });
  

})

router.post('/', function (req, res) {
  console.log(req.body)
    let newCabEntry= new Cab(req.body);
    newCabEntry.save((err, cab) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).send({status:"success",message:"event created successfully",event:cab})
  });

})


module.exports = router;
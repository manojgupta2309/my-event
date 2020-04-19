const router = require('express').Router();
const Query = require('../../models/Query')


router.post('/', function (req, res) {
  
    let newQuery= new Query(req.body);
    newQuery.save((err, query) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json({status:true,message:"your query is submitted"})
  });

})


module.exports = router;
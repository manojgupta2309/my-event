const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const env = require('../../config/env')
const config = require('../../config/config')[env];
const User = require('../../models/User')

router.post('/register', function(req, res) {
  
  let hashedPassword = bcrypt.hashSync(req.body.password, 8);
  
  let newUser={
    "email" : req.body.email,
    "password" : hashedPassword
  }
  
  newUser= new User(newUser);
  newUser.save((err, user) => {
  if (err) {
    res.status(500).send(err);
  }
  res.status(201).json({"message": "User created successfully"});
 
});

});


router.post('/login', function(req, res) {
  var {email,password} = req.body
  User.findOne({email:email},(err,user)=>{
    if (err){
        res.status(500).send(err);
        return;
    } 
   if(!user){
        res.status(404).json({auth: false,"message":"Invalid credentials"});
        return;
    }

    if(user.email==email &&
      bcrypt.compareSync(password, user.password))
        {
        
        let token = jwt.sign({email:user.email,name:user.name}, config.secret, {
          expiresIn: 86400 
        });
        res.status(200).send({ auth: true, token: token ,name:user.name,email:user.email});
    
      }
      else{
        res.status(401).send({ auth: false,message:"Authentication failed"});
      }
     })
});
 
module.exports = router;
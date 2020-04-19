const Cab = require('../models/Cab')



const updateJoined = (data,cb)=>{
    console.log(data)
    if(data.joined){
        Cab.findOneAndUpdate(
            { _id: data.cabId }, 
            { $push: { joiners: data.client  } , joined:data.count},
           function (error, success) {
                 if (error) {
                     console.log(error);
                 } else {
                    success.joined = data.count
                    success.joiners.push(data.client)
                     console.log(success);
                     cb(success)
    
                 }
             });
    }
   else if(data.liked){
    Cab.findOneAndUpdate(
        { _id: data.cabId }, 
        { $push: { likers: data.client  } , likes:data.count},
       function (error, success) {
             if (error) {
                 console.log(error);
             } else {
                 success.likes = data.count
                 success.likers.push(data.client)
                 console.log(success);
                 cb(success)

             }
         });
    }     
     
}

module.exports = {
    updateJoined:updateJoined
}
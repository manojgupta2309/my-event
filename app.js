const express = require("express"),
 app = express(),
 cors = require('cors'),
 bodyParser = require("body-parser"),
 db =  require("./db/db"),
 api =  require("./api"),
 path = require('path'),
 http = require('http'),
 server = http.createServer(app),
 io = require("socket.io")(server, { origins: '*:*'}),
 socketCB = require('./socket/cab'),
 PORT = 3500;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
db.init();

app.all("/*", function(req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // restrict it to the required domain
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true);
  // Set custom headers for CORS
  res.header(
    "Access-Control-Allow-Headers",
    "Content-type,Accept,X-Access-Token,X-Key"
  );
  if (req.method == "OPTIONS") {
    res.status(200).end();
  } else {
    next();
  }
});

app.use('/api',api)


app.get('/test',(req,res)=>{
    res.send("Test")
})
app.use('/',express.static("build"))
app.get('*', function (req, res, next) {
  res.sendFile(path.resolve('./build/index.html'));
});
  
process.on('uncaughtException', function(err) {
  console.log(" UNCAUGHT EXCEPTION ");
  console.log(err.message);
});
io.on("connection", function(socket) {
  console.log("socket connected")
  socket.on("join-event", function(event) {
    console.log("event",event)
    if(event.joined){
      socketCB.updateJoined(event,(sucess)=>{
        io.emit("joinedLiked", {event:sucess});
      })
    }else if(event.liked){
      socketCB.updateJoined(event,(sucess)=>{
        io.emit("joinedLiked", {event:sucess});
      })
      
    }
   
    
  });
  
});

server.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

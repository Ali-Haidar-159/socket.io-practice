// initial code 

"use strict";
console.clear();

const { Socket } = require("engine.io");
// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let express = require("express") ;
let app = express() ;

let http = require("http") ;
let path = require("path") ;

let {Server} = require("socket.io") ;
let userRoute = require("./router/user.router");

//Creating Server : 

let myServer = http.createServer(app) ;

// Socket.io Code 

let io = new Server(myServer) ;

io.on("connection" , function(socket){

    console.log("New User Is Connected.") ;

    socket.on("chat-text" , function(data){

        io.sockets.emit("broadcastingMessage" , data) ;

    })

    socket.on("disconnect" , function(){

        console.log("User Is Disconnected.");

    });

});

// Connect With Server : 

app.use(express.static(path.join(__dirname , "public" , "JS"))) ;
app.use(express.static(path.join(__dirname , "public" , "images"))) ;
app.use(express.static(path.join(__dirname , "public" , "CSS"))) ;

app.use(userRoute) ;

// Request-Response-Cycle : 

app.get("/" , function(req,res){

    res.status(200).sendFile(path.join(__dirname , "view" , "home.html")) ;

}) ;

// handle the route error 

app.use(function(req,res,next){

    res.status(404).json({

        status : 404 ,
        message : "page not found" 

    });

});

// handle the server error 

app.use(function(err,req,res,next){

    res.status(500).json({
        
        status : 500 ,
        message : "Find server error" ,
        error : err.message 

    });

});

// Exports Code :

module.exports = myServer ;

// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let express = require("express") ;
let app = express() ;

let http = require("http") ;
let path = require("path") ;

let {Server} = require("socket.io") ;

// creating server 

let myServer = http.createServer(app) ;

let io = new Server(myServer) ;

// Socket.io Code 

io.on("connection" , function(socket){

    console.log("New User is connected") ;

    socket.on("myEvent1" , function(data){

        console.log("data 1 : " , data) ;

    });

    socket.on("disconnect" , function(){

        console.log("User is disconnected") ;

    });

});

let chotoBari = io.of("/chotoBari") ;
chotoBari.on("connection" , function(socket){

    console.log("user is connected on the choto bari") ;

    socket.on("myEvent2" , function(data){

        console.log("data 2 : " , data) ;

    });

    socket.emit("chotoEvent" , "Choto Event") ;

    socket.on("disconnect" , function(){

        console.log("User is disconnected from the chotoBari") ;

    });

}) ;

// Connect With Server : 

app.use(express.static(path.join(__dirname , ".." , "frontend" , "public"))) ;

// Request-Response-Cycle : 

app.get("/" , function(req,res){

    res.status(200).sendFile(path.join(__dirname , ".." , "frontend" , "home.html")) ;

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
        message : "Find server error",
        error : err

    });

});

// Exports Code :

module.exports = myServer ;

// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let express = require("express") ;
let app = express() ;

let path = require("path") ;
let http = require("http") ;

let {Server} = require("socket.io") ;

// creating Server :

let myServer = http.createServer(app) ;

// Connect With Server : 

let io = new Server(myServer) ;

io.on("connection" , function(socket){

    console.log('user connected') ;

    socket.emit("myEvent" , "This is user defined event") ;

    socket.on("disconnect" , function(){

        console.log("User disconnected !") ;

    })

    socket.on("reconnect" , function(){

        console.log("User disconnected !") ;

    })

})

app.use(express.static(path.join(__dirname , ".." , "frontend" , "public"))) ;


// Request-Response-Cycle : 

app.get("/" , function(req,res){

    res.status(200).sendFile(path.join(__dirname , ".." , "frontend" , "index.html")) ;

}) ;

// handle the route error 

app.use(function(req,res,next){

    res.status(404).json({

        status : 404 ,
        message : "page not found"

    }) ;

}) ;

// handle the server error 

app.use(function(err,req,res,next){

    res.status(500).json({

        status : 500 ,
        message : "Find the server error " ,
        error : err.message 

    })

})

// Exports Code :

module.exports = myServer ;

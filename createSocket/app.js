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

// Connect With Server : 

let myServer = http.createServer(app) ;

let io = new Server(myServer) ;

io.on("connection" , function(socket){

    console.log("Connected") ;

    socket.on("disconnect" , function(){

        console.log("Disconnected") ;

    })

})

// Request-Response-Cycle : 

app.get("/" , function(req,res){

    res.status(200).sendFile(path.join(__dirname , "index.html")) ;

}) ;

// handle the route error 

app.use(function(req,res,next){

    res.status(404).json({

        status : 404 ,
        message  : "Page not found !!!"

    }) ;

}) ;

// handle the server error 

app.use(function(err,req,res,next){

    res.status(500).json({

        status : 500 ,
        message : "Find the server error !!!" ,
        error : err.message

    });

});

// Exports Code :

module.exports = myServer ;

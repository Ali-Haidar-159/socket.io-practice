// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let myServer = require("./app") ;

// Connect With Server : 

let PORT = 3000 ;

myServer.listen(PORT , function(){

    console.log("*** SERVER IS RUNNING @ 3000 PORT ***") ;

}) ;

// Exports Code :



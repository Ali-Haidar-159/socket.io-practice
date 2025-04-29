// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let express = require("express") ;
let userRoute = express.Router() ;

let { getChat } = require("../controller/user.controller");

//Routing Code : 

userRoute.get("/chat" , getChat) ;

// Exports Code :

module.exports = userRoute ;

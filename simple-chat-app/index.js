// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let myServer = require("./app") ;

let chalk = require("chalk") ;
require("dotenv").config() ;

//Listening The Server : 

let PORT = process.env.PORT ;

myServer.listen(PORT , function(){

    console.log(chalk.bold.bgHex("#f1c40f").white(`Server is running @${PORT} ...`)) ;

})

// Exports Code :



// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let path = require("path") ;

//Controller Code :

let getChat = function(req,res){

    res.status(200).sendFile(path.join(__dirname , ".." , "view" , "chat.html")) ;

}

// Exports Code :

module.exports = {

    getChat ,

}

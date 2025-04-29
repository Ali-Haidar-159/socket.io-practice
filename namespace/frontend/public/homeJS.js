// initial code 
"use strict" 
console.clear() ;

// main code 

let boroBariConnection = io() ;
boroBariConnection.emit("myEvent1" , "Hello World")

let chotoBariConnection = io("/chotoBari") ;
chotoBariConnection.emit("myEvent2" , "Hello World2") ;
chotoBariConnection.on("chotoEvent" , function(data){

    document.getElementById("heading").innerText = data ;

})


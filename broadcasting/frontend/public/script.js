// initial code 
"use strict" 
console.clear() ;

// main code 


let heading = document.getElementById("heading") ;

let socket = io() ;

socket.on("message" , function(msg){

    heading.textContent = msg ;

});

socket.on("myEvent" , function(msg){

    heading.textContent = msg ;

});

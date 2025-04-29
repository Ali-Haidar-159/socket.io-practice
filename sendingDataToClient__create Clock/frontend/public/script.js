// initial code 
"use strict" 
console.clear() ;

// main code 


let clock = document.getElementById("clock") ;

let socket = io() ;

socket.on("message" , function(msg){

    clock.textContent = msg ;

});

// initial code 
"use strict"
console.clear() ;

// main code 

let socket = io() ;

let msg = document.getElementById("msg") ;
let btn = document.getElementById("btn") ;
let chatHistory = document.getElementById("chatHistory") ;

function sendingMessage ()
{
    let message = msg.value ;

    socket.emit("chat-text" , message) ;

    msg.value = "" ;
}

socket.on("broadcastingMessage" , function(data){

    let tag = document.createElement("li") ;
    tag.textContent = data ;

    chatHistory.appendChild(tag) ;

}) ;
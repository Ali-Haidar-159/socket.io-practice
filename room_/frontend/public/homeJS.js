// initial code 
"use strict" 
console.clear() ;

// main code

// select all html component

let history = document.getElementById("history") ;
let msg = document.getElementById("msg") ;
let sendBtn = document.getElementById("sendBtn") ;
let room = document.getElementById("room") ;
let joinBtn = document.getElementById("joinBtn") ;

// socket code 

let socket = io() ;

sendBtn.addEventListener("click" , function(){

    if(room.value === "")
    {
        console.log(socket.id) ;
        socket.emit("chat" , msg.value) ;
    }
    else
    {
        socket.emit("chat" , msg.value , room.value) ;
    }

    msg.value = "" ;

});

socket.on("chat2" , function(data){

    let tag = document.createElement("li") ;
    tag.innerText = data ;

    history.appendChild(tag) ;

}) ;

joinBtn.addEventListener("click" , function(e){

    alert("you joined a group chat.Group name is : " + room.value) ;

})

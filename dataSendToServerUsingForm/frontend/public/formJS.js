// initial code 

let socket = io() ;

let msg = document.getElementById("msg") ;
let btn = document.getElementById("btn") ;

btn.addEventListener("click" , function(e){

    e.preventDefault() ;

    socket.send(msg.value) ;

    msg.value = "" ;

}) ;

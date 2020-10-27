let buttonLeft = document.querySelector('.left');
let buttonRight = document.querySelector('.right');
let parovoz = document.querySelector('div.parovoz');
let field = document.querySelector('.field');
let position = 0;   
let interval1;      
let interval2;     
let side = "stop";  

buttonLeft.onclick = function leftMargin(){

    clearInterval(interval2);  

    function moveLeft(){

        if (position > 82){ 
            clearInterval(interval1);  
        } else {
            parovoz.className = 'parovoz';
            parovoz.style.marginRight = position + 'vw';
            position = position + 1;
        }
    }

    if( side === "right" || side === "stop" ){
        interval1 = setInterval(moveLeft, 100);
        side = "left";
    }
}

buttonRight.onclick = function rightMargin(){

    clearInterval(interval1);  
   
    function moveRight(){

        if (position < -81){ 
            clearInterval(interval2);
        } else {
            parovoz.className = 'parovoz-right';
            parovoz.style.marginRight = position-1 + 'vw';
            position = position - 1;
        }
    }

    if( side === "left" || side === "stop" ){
        interval2 = setInterval(moveRight, 100);
        side = "right";
    }
}

let evKey = document.addEventListener('keydown', (event) =>{
    if (event.key == "ArrowLeft"){
        if (position > 82){ 
            position = 82;
        } else{
        parovoz.className = 'parovoz';
        parovoz.style.marginRight = position + 'vw';
        position = position + 1;
    }}

    if (event.key == "ArrowRight"){
        if (position < -81){ 
            position = -81;
        } else{
        parovoz.className = 'parovoz-right';
        parovoz.style.marginRight = position-1 + 'vw';
        position = position - 1;
    }}
})
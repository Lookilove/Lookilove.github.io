let buttonLeft = document.querySelector('.left');
let buttonRight = document.querySelector('.right');
let parovoz = document.querySelector('.parovoz');

pauseParovoz = () => {
    let temp  = window.getComputedStyle(parovoz).getPropertyValue('left');
    parovoz.style.left = temp;
}

moveLeft = () => {
    parovoz.className = 'parovoz';
    parovoz.style.left = "-41vw";
}

moveRight = () => {
    parovoz.className = 'parovoz-right';
    parovoz.style.left = "41vw"
}

let evKey = document.addEventListener('keydown', (event) =>{
    if (event.key == "ArrowLeft"){
        clearInterval();
        if (position > 82){ 
            position = 82;
        } else{
        parovoz.className = 'parovoz';
        parovoz.style.left = "-41vw";
    }}

    if (event.key == "ArrowRight"){
        clearInterval(interval1);
        if (position < -81){ 
            position = -81;
        } else{
        parovoz.className = 'parovoz-right';
        parovoz.style.left = "41vw"
    }}
})

buttonLeft.addEventListener('mousedown', moveLeft);
buttonLeft.addEventListener('mouseup', pauseParovoz);
buttonRight.addEventListener('mousedown', moveRight);
buttonRight.addEventListener('mouseup', pauseParovoz);
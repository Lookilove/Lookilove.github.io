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

document.addEventListener('keydown', (event) =>{
    if (event.key == "ArrowLeft"){
        moveLeft();
    }

    if (event.key == "ArrowRight"){
        moveRight();
    }
})

document.addEventListener('keyup', pauseParovoz)
buttonLeft.addEventListener('mousedown',moveLeft);
buttonLeft.addEventListener('mouseup', pauseParovoz);
buttonRight.addEventListener('mousedown', moveRight);
buttonRight.addEventListener('mouseup', pauseParovoz);
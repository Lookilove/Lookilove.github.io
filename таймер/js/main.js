let button = document.querySelector('#inp2');
let uhour = document.querySelector('#inp1h');
let umin = document.querySelector('#inp1m');
let text = document.querySelector('.text');
let fontello = document.querySelector('.fontello');
let min = 0;
let sec = 59;
let timer = undefined;

clickOnButton = () => { 
    if ( timer === undefined ) {
        timer = setInterval(clickOnButton, 1000);
    } else {
        console.log(min + " : " + sec);
        text.innerHTML = `${min} : ${sec}`;
        --sec;
        if ( sec < 0) {
            --min;
            sec = 59;
            if( min < 0 ) {
                clearInterval(timer);
                timer = undefined;
                min = 0;
            }
        }
    }
}

changeValues = () => {
    min = Number(uhour.value) * 60 + Number(umin.value) - 1;
    console.log(min + " : " + sec);
}

uhour.addEventListener('change', changeValues); 
umin.addEventListener('change', changeValues);
button.addEventListener('click', clickOnButton);


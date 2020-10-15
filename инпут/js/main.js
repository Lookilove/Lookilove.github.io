let secDiv = document.querySelector('.second-div');
let but = document.querySelector('.but');
let textArea;
but.onclick = function (){
    let text = document.querySelector('.text');
    let stext = text.value.split(' ');
    let wordCount = stext.length;

    console.log("Количество слов: " + wordCount);

    function NewEl(){
        for (let i = 0; i < wordCount; i++){
            if(!stext[i]){
                continue;
            }
            textArea = document.createElement('textarea');
            textArea.innerHTML = stext[i];
            secDiv.appendChild(textArea);
        }
    }
    NewEl();
}
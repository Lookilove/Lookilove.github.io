let secDiv = document.querySelector('.second-div');
let but = document.querySelector('.but');
let textArea;
but.onclick = function (){
    let text = document.querySelector('.text');
    let wordCount = text.value.match(/(\w+)/g).length;
    console.log("Количество слов: " + wordCount);

    function NewEl(){
        for (let i = 0; i<wordCount; i++){
            textArea = document.createElement('textarea');
            textArea.innerHTML = text.value.match(/(\w+)/g)[i];

            secDiv.appendChild(textArea);
        }
    }
    NewEl();
}

function createChess(){
    let chessBoard = document.querySelector('.chess-board');
    let block;
    let positive = true;

    for (let i = 1; i <= 8; i++){
        for (let k = 1; k <= 8; k++){
            if (k == 1){
                positive = !positive;
            }
            block = document.createElement('div');
            if (positive) block.className = 'block black';
            else block.className = 'block white';

            if ((i==1 && k==1) || (i==1 && k==8) || (i==8 && k==1) || (i==8 && k==8)){
                block.innerHTML  = "&#9820;";
            }
            if ((i==1 && k==2) || (i==1 && k==7) || (i==8 && k==2) || (i==8 && k==7)){
                block.innerHTML  = "&#9822";
            }
            if ((i==1 && k==3) || (i==1 && k==6) || (i==8 && k==3) || (i==8 && k==6)){
                block.innerHTML  = "&#9821";
            }
            if ((i==1 && k==5) || (i==8 && k==5)) {
                block.innerHTML  = "&#9818";
            }
            if ((i==1 && k==4) || (i == 8 && k == 4)) {
                block.innerHTML  = "&#9819";
            }
            if (i==2 || i == 7) {
                block.innerHTML  = "&#9823";
            }
            if (i==7 || i ==8) block.style.color = "white";

            chessBoard.appendChild(block);
            positive = !positive;
        }
    }
}

createChess();
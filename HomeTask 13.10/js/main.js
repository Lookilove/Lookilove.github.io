/**  cгенерируй 2м массив, константа сторона поля, например, равна 5 **/
let temp = 5;

function createArr(){
    let arr1 = [];
    for (let i = 0; i < temp; i++){       
        let arr2 = []; 
        for (let k = 0; k < temp; k++){ 
            arr2[k] = 0;
        }
        arr1[i] = arr2;
    }
    return arr1;
}
let workArr = createArr();
// console.table(workArr);


/**  напиши функцию очистки массива, заполнить null **/
function clearArr(array){
    for (let i = 0; i < array.length; i++) {
        for (let k = 0; k < array.length; k++){
        let gameBoard = array.map((item, index) => {
            return array[index].map(() => {
                return null;
            });
        });

        return gameBoard;
        }
    }
}
workArr = clearArr(workArr);
// console.table(workArr);

/**  напиши функцию подсчета ненулевых(непустых) клеток во всём массиве **/
function sumNotNull(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        for (let k = 0; k < array.length; k++){ 
            if (array[i][k] !== null) {
                sum ++;
            }
        }
    }
    return sum;
}

let amoundNotNull = sumNotNull(workArr);
// console.log(amoundNotNull);

/** отобрази на странице игровое поле(клетки массива) и строку статуса, в которой будет написано количество ненулевых клеток. Нулевые клетки закрашены белым цветом.  **/
let gameField = document.querySelector('.field');
function createGameField(gameField, array){
    let block;

    for(let i=0; i < array.length; i++){
        for (let k = 0; k < array.length; k++){
            block = document.createElement('div');
            if (i==0 && k==0) {
                block.className = 'block blue';
            } else {
                block.className = 'block white';
            }
            gameField.appendChild(block);
        } 
    }
    let status = document.querySelector('.status');
    status.innerHTML =  `STATUS:   ${amoundNotNull}`;
}
createGameField(gameField, workArr);


/**  покажи на странице 4 html кнопки-стрелки: "вверх", "вниз", "влево", "вправо".  **/
function createButtons(){
    let buts = document.querySelector('.buttons');
    let button;

    for(let i=1; i <= 4; i++){
        button = document.createElement('button');
        button.className = 'button';
        button.innerHTML = '&#8679';
        switch(i) {
          case 1:
            button.className = 'button up';
            break;
          case 2:
            button.className = 'button right';
            break;
          case 3:
            button.className = 'button left';
            break;
          case 4:
            button.className = 'button down';
            break;
        }
        buts.appendChild(button); 
    }
}
createButtons();


/** сделай управление мышкой и клавиатурой, там где находится курсор (курсор- это любая клетка поля), закрашиваем клетку синим цветом.  Первоначальное положение курсора в левом верхнем углу. В массиве, в соответствующую ячейку писать "1". Уход с клетки возвращает значение null**/
let start = [0, 0];
workArr[start[0]][start[1]] = 1;

let buttonUp = document.querySelector('.up');
let buttonDown = document.querySelector('.down');
let buttonLeft = document.querySelector('.left');
let buttonRight = document.querySelector('.right');

const changeClassToOrange = (childNodes, className) => {
    gameField.childNodes[start[0]+Math.abs(start[1]*temp)].classList.remove('white');
    gameField.childNodes[start[0]+Math.abs(start[1]*temp)].classList.remove('blue');
    gameField.childNodes[start[0]+Math.abs(start[1]*temp)].classList.add('orange');
}

const changeClassToBlue = (childNodes, className) => {
    gameField.childNodes[start[0]+Math.abs(start[1]*temp)].classList.remove('white');
    gameField.childNodes[start[0]+Math.abs(start[1]*temp)].classList.remove('orange');
    gameField.childNodes[start[0]+Math.abs(start[1]*temp)].classList.add('blue');
}

const moveCell = (x, y) => {
    // set old cursor position as orange
    changeClassToOrange(start[0]+Math.abs(start[1]*temp), 'orange');
    workArr[start[1]][start[0]] = 2;
    // move cursor position
    start[0] = start[0] + x;
    start[1] = start[1] + -y;
    console.table(workArr);
    // change new cursor position color
    changeClassToBlue(start[0]+Math.abs(start[1]*temp), 'blue');
    workArr[start[1]][start[0]] = 1;
    // Calculate score
    let status = document.querySelector('.status');
    status.innerHTML =  'STATUS:   ' + sumNotNull(workArr);

    check(start, workArr);
}
const moveUp = () => {
    if (check(start,workArr)[1]){
        moveCell(0, 1);
    }
}

const moveDown = () => {
    if (check(start,workArr)[3]){
        moveCell(0, -1);
    }
}

const moveLeft = () => {
    if (check(start,workArr)[0]){
        moveCell(-1, 0);
    }
}

const moveRight = () => {
    if (check(start,workArr)[2]){
        moveCell(1, 0);
    }
}

document.addEventListener('keydown', (event) =>{
    if (event.key == "ArrowLeft"){
        moveLeft();
    }
    if (event.key == "ArrowRight"){
        moveRight();
    }
    if (event.key == "ArrowUp"){
        moveUp();
    }
    if (event.key == "ArrowDown"){
        moveDown();
    }
})

buttonLeft.addEventListener('mousedown',moveLeft);
buttonUp.addEventListener('mousedown', moveUp);
buttonRight.addEventListener('mousedown', moveRight);
buttonDown.addEventListener('mousedown', moveDown);


// /** на игровом поле сделать отображение следа на клетках после курсора оранжевым цветом. В соответствующих ячейках массива где след писать "2". След весь от начала игры **/


// /** сделай отключение соответствующих кнопок управления, если курсор с краю поля или наступает на свой след **/

function blockCheckBorder(start) {
    let resultBorder = [];

    if (start[0] - 1 < 0) {
        resultBorder[0] = false;  //left
    }else {
        resultBorder[0] = true;
    }

    if ((start[0] + 1) == temp) {
        resultBorder[2] = false;  //right
    }else {
        resultBorder[2] = true;
    }

    if ((start[1] - 1) < 0) {
        resultBorder[1] = false;  //up
    }else {
        resultBorder[1] = true;
    }

    if ((start[1] + 1) == temp) {
        resultBorder[3] = false;  //down
    } else {
        resultBorder[3] = true;
    }

    return resultBorder;
};

function checkBlockWay(borderCheck, array, start) {
    let resultArr = [];

    if (borderCheck[0]) {  //left
        if (array[start[1]][start[0]-1] >= 1) {
            resultArr[0] = false;
        }else {
            resultArr[0] = true;
        }
    } else {
        resultArr[0] = false;
    }

    if (borderCheck[1]) {//up
        if (array[start[1] - 1][start[0]] >= 1) {
            resultArr[1] = false;
        } else {
            resultArr[1] = true;
        }
    }
    else {
        resultArr[1] = false;
    }

    if (borderCheck[2]) {//right
        if (array[start[1]][start[0] + 1] >= 1) {
            resultArr[2] = false;
        } else {
            resultArr[2] = true;
        }
    } else {
        resultArr[2] = false;
    }

    if (borderCheck[3]) {//down
        if (array[start[1] + 1][start[0]] >= 1) {
            resultArr[3] = false;
        } else {
            resultArr[3] = true;
        }
    } else {
        resultArr[3] = false;
    }

    return resultArr;
}

function check( start, workArr ){
    let borderCheck = blockCheckBorder(start);
    let  way = checkBlockWay(borderCheck, workArr, start);

    // /** сделай обработку ситуации GAME OVER, когда нет куда ходить, отобразить на странице надпись GAME OVER **/
    if (way.find(element => element === true) == undefined){
        alert('Game Over');
    }

    return way;
}

// /** добавь таймер на 10 секунд, если не сделал ход, GAME OVER **/

let timeWait = timeWaitUser = 12;
let time = document.querySelector('.time');
document.onmousemove = document.onkeydown = document.onscroll = function(){timeWait = timeWaitUser};
setInterval(function(){
    time.innerHTML =  `Time to lose:  ${timeWait}`;
    if(timeWait == 12 || timeWait == 11){
        time.className = 'time timeNone';
    } else {
        time.className = 'time';
    }
	timeWait --;
	if(timeWait <=0 ) alert('Game Over');
}, 1000);

let arr =  [5, 23, -110, 3, 18, 0, 14];
console.log("Исходный массив: "+arr);

/******* Вывести в консоль только нечетные числа ********/
let arr1 = [];
for (let i = 0; i < arr.length; i++){
    if ( arr[i] % 2 == 1){
        arr1.push(arr[i]);
    }    
}
console.log('Нечетные числа массива: '+arr1);

/* Вывести в консоль массив, каждая ячейка которого будет увеличена на 20 */
let arr2 = [];
for (let i = 0; i < arr.length; i++){
    arr2[i] = arr[i] + 20;  
}
console.log("Каждый элемент увеличен на 20: "+arr2);

/* Вывести в консоль массив, состоящий только из положительных нечетных чисел */
let arr3 = [];
for (let i = 0; i < arr.length; i++){
    if ( arr[i] % 2 == 1 && arr[i] > 0){
        arr3.push(arr[i]);
    }    
}
console.log("Положительныйе нечетные числа: "+arr3);

/* Вывести в консоль сумму остатков от целочисленных делений на 3 каждой ячейки */
let sum = 0;
let arr4 = [];
for (let i = 0; i < arr.length; i++){
    if ( Number.isInteger(i)){
        arr4.push(arr[i]);
        sum += arr4[i];
    }    
}
console.log("Cумма остатков от целочисленных делений на 3: "+sum);

/* Проверить, и вывести в консоль результат проверки, есть ли в массиве число 5 */
function contains(arr, el) {
    for (let i = 0; i < arr.length; i++){
        el = arr [i];
        if ( el == 5){
            console.log('В массиве присутствует число "5" ');
        } else {
            console.log('В массиве нету числа "5" ');
        }
        arr.splice(i); 
    }
}
contains(arr);
let arr =  [5, 23, -110, 3, 18, 0, 14];
console.log("Исходный массив: "+arr);

/******* Вывести в консоль только нечетные числа ********/
let arr1 = arr.filter((item) =>{
    if (item % 2 == 1){
        return item;
    } 
});
console.log('Нечетные числа массива: '+arr1);

/* Вывести в консоль массив, каждая ячейка которого будет увеличена на 20 */
let arr2 = arr.map(item => item + 20);
console.log("Каждый элемент увеличен на 20: "+arr2);

/* Вывести в консоль массив, состоящий только из положительных нечетных чисел */
let arr3 = arr.filter((item) => {
    if (item % 2 == 1 && item > 0){
        return item;
    } 
});
console.log("Положительные нечетные числа: "+arr3);

/* Вывести в консоль сумму остатков от целочисленных делений на 3 каждой ячейки */
let sum = 0;
let arr4 = arr.map((item) => {
    if ( Number.isInteger(item)){
        item = Math.abs(item);
        sum += item % 3;
        return sum;
    }  
}
);
console.log("Cумма остатков от целочисленных делений на 3: "+sum);

/* Проверить, и вывести в консоль результат проверки, есть ли в массиве число 5 */
console.log("Наличие числа 5 в массиве: ", arr.includes(5))
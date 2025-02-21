/*
Створити масив, довжину та елементи якого задає користувач. Після цього, відсортувати масив 
за зростанням. Далі, видалити з масива елементи з 2-го по 4-й елемент. По мірі змін масива - виводити його вміст на сторінку.
*/
let arrLenght ;

do {
    arrLenght = parseInt(prompt(`Enter the length of array`));     //Валидация
} while (isNaN(arrLenght) && arrLenght > 0)


let arr = [];

for (i = 0; i < arrLenght; i++ ) {
    arr.push(parseInt(prompt(`Enter your value`)))
}
document.write(`<p>${arr}</p>`)

function arrSort(arr) {
    return arr.sort((a, b) => a - b);
}

arr = arrSort(arr);

document.write(`<p>${arr}</p>`)

arr.splice (2, 2);

document.write(`<p>${arr}</p>`)
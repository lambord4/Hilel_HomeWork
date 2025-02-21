/*
Дано массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
Знайти суму і кількість додатних (положительных) елементів.
Знайти мінімальний (найменший) елемент масива і його індекс.
Знайти максимальний (найбільший) елемент масива та його індекс
Визначити кількість від’ємних (отрицательных) елементів масива
Знайти кількість непарних додатних  елементів
Знайти кількість парних додатних елементів
Знайти суму парних додатних елементів
Знайти суму непарних додатних елементів
Знайти добуток всіх додатних елементів
Змінити на 0 всі елементи масива окрім найбільшого
*/

let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
let quantity = 0;
let sum = 0;
for ( i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum = sum + arr[i]
        quantity++
    }
}

document.write(`<p>a) quantity = ${quantity} | sum = ${sum}</p>`)

function findMinElement(arr) {
    let minValue = arr[0];
    let minIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
            minIndex = i;
        }
    }

    return { minValue, minIndex };
}

let result = findMinElement(arr);

document.write(`<p>b) Min Value = ${result.minValue} | Min Index = ${result.minIndex}</p>`)

function findMaxElement(arr) {
    let maxValue = arr[0];
    let maxIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
            maxIndex = i;
        }
    }

    return { maxValue, maxIndex };
}

let result2 = findMaxElement(arr);

document.write(`<p>c) Max Value = ${result2.maxValue} | Max Index = ${result2.maxIndex}</p>`)

let quantityOfNegative = 0;
for ( i = 0; i < arr.length; i++) {
    if( arr[i] < 0) {
        quantityOfNegative++
    }
}
document.write(`<p>d) Quantity of Negative = ${quantityOfNegative}</p>`)

let quantityOfUnpaired = 0;

for ( i = 0; i < arr.length; i++ ) {
    if (arr[i] > 0 && arr[i]%2) {
        quantityOfUnpaired ++
    }
}
document.write(`<p>e) Quantity of Unpaired Elemtens = ${quantityOfUnpaired}</p>`)

let quantityOfPaired = 0;

for ( i = 0; i < arr.length; i++ ) {
    if (arr[i] > 0 && !(arr[i]%2)) {
        quantityOfPaired ++
    }
}
document.write(`<p>f) Quantity of Paired Elemetns = ${quantityOfPaired}</p>`)

let sumOfPaired = 0

for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && !(arr[i]%2)) {
        sumOfPaired = sumOfPaired + arr[i]
    }
}

document.write(`<p>g) Sum of Paired Elemetns = ${sumOfPaired}</p>`)

let sumOfUnpaired = 0;

for ( i = 0; i < arr.length; i++ ) {
    if (arr[i] > 0 && arr[i]%2) {
        sumOfUnpaired = sumOfUnpaired + arr[i]
    }
}
document.write(`<p>h) Sum of Unpaired Elemetns = ${sumOfUnpaired}</p>`)

let productOfPositiveElem = 1;

for (i =0; i< arr.length; i++) {
    if (arr[i] > 0) {
        productOfPositiveElem = productOfPositiveElem * arr[i]
    }
}

document.write(`<p>i) Product of Positive Elemetns = ${productOfPositiveElem}</p>`)

for ( i = 0; i < arr.length; i++) {
    if (arr[i] !== result2.maxValue) {
        arr[i] = 0
    }
}

document.write (`<p>j) [${arr}]</p>`)

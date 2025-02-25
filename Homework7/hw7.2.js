/*
Дано масив з елементами різних типів. Створити функцію 
яка вираховує середнє арифметичне лише числових елементів 
даного масиву.
*/

const array = [ 
    25,
    'hello',
    71,
    'Nokia',
    831,
    undefined,
    -56,
    true,
    81
]

function average (arr) {
    let sum = 0;
    let quantity = 0;
    for ( i = 0; i < arr.length; i++) {
        if (!(isNaN(arr[i]))) {
            sum = sum + arr[i];
            quantity++;
        }
    }
    let aver = sum / quantity
    return aver;
}

document.write(average(array))
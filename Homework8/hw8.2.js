/*
Створити функцію для розрахунку добутку 
двох чисел, що викликається так: name(5)(2). 
Функція повинна повертати результат (у середині 
функції не має бути консоль лога!)
*/

function multiplication (a) {
    return function innerMultiplication (b) {
        return a * b
    }
}

document.write(multiplication(5)(6));
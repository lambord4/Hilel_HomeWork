/*
Написати функцію, яка приймає 1 параметр. 
Та скадае значення з тим, що передали перший раз 
і т. д. Все це із замиканнями, наприклад:

console.log(sum(4)); // 4

console.log(sum(6)); // 10

console.log(sum(10)); // 20

console.log(sum(7)); // 27

*/



function calculateSum () {
    let result = 0;
    return function calculate (a) {
         result += a
         return result
    }
}

let sum = calculateSum()

document.write(sum(4) + "<br>");
document.write(sum(6) + "<br>");
document.write(sum(10) + "<br>");
document.write(sum(27) + "<br>");
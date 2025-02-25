/*
Реалізуйте функцію removeElement(array, item), щоб 
видалити елемент item з масиву array.

Наприклад:

const array = [1, 3, 4, 6, 2, 5, 7];
*/

const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement (array, item) {
    let result = [];
    for ( i = 0; i < array.length; i++) {
        if ( array[i] === item ) {
            array.splice(i,1);
        }
    }
    return array
}
let item ;

do {
    item = parseInt(prompt(`Enter your number to remove from array. 
Item must be more than 1 and less than 7`));
} while (isNaN(item) || item > 7 || item < 0 || item === 0);

document.write(removeElement(array,item))
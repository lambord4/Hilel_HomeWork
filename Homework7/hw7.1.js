/*
Створити функцію, яка прибирає з рядка всі символи, 
які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' 
поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
*/

let str = prompt(`Enter your string`);
let charts = prompt(`Enter symbols you want to delete `);


function cleaner (string, symbol) {
    let stringArray = string.split ('')
    let symbolArray = symbol.split ('')
    let result = [];
    for ( i = 0; i < stringArray.length; i++ ) {
        let shouldRemove = false;
        for (j = 0; j < symbolArray.length; j++) {
            if (stringArray[i] === symbolArray[j]) {
                shouldRemove = true
                break;
            }
        }
        if (!shouldRemove) {
            result.push(stringArray[i]); 
        }
    }
    return result.join("");
}

let cleanedString = cleaner(str, charts); 

document.write(cleanedString)
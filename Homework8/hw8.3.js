/*
Цикл на кожній ітерації пропонує через prompt 
ввести число більше 100 (але максимум 10 ітерацій циклу) . 
Якщо відвідувач ввів число менше ста – попросити ввести 
ще раз, і таке інше. Якщо користувач вводить більше ста, 
текст або цикл закінчує всі ітерації, то функція виводить 
в консоль останній введення користувача і завершує функцію.
*/

function somethingStrange() {
    let num;

    for (let i = 0; i < 10; i++) {
        num = parseInt(prompt("Enter a number more than 100"));

        while (isNaN(num) || num < 100) {
            num = parseInt(prompt("Please enter a number more than 100"));
        }

        if (num > 100) {
            console.log("Last entered number is: ", num);
            return num;
        }
    }
    console.log("Last entered number after 10 attempts is: ", num);
    return num;
}

somethingStrange()

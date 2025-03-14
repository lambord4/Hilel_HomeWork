/*
Створіть HTML-сторінку з декількома кнопками. 
Ваше завдання - створити обробник подій для 
батьківського елементу, який відслідковуватиме кліки на всіх кнопках.
*/


const container = document.querySelector('.container');

container.addEventListener('click', (event) => {
    if ( event.target.classList.contains('btn')) {
        const buttonText = event.target.textContent;
        alert (` You pressed ${buttonText} button`)
    };
});
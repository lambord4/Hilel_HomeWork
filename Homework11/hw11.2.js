/*
Є блок із текстом на сторінці та кнопка. При натисканні 
на кнопку текст змінює колір. При повторному натисканні – 
повертається попередній колір
*/

const button = document.querySelector('.btn');
const text = document.querySelector('.text');

button.addEventListener('click', function() {
    button.classList.toggle('color');            //Добавил изменение цвета на саму кнопку
    text.classList.toggle('switch')              //Переключение цвета текста
    if (button.textContent === "Color switcher") {       //Смена надписи кнопки
        button.textContent = "Color is switched!";
    } else {
        button.textContent = "Color switcher";
    }

})

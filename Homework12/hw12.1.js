/*
На сторінці є дві кнопки. При натисканні на 
першу кнопку користувач повинен ввести в prompt 
посилання, при натисканні на другу – переадресовується 
на інший сайт (за раніше введеним посиланням).
*/

const buttons = document.querySelectorAll('.button');

const firstButton = buttons[0];
const secondButton = buttons[1];

let userLink = ''

firstButton.addEventListener('click', () => {
    userLink = prompt(`Enter your link`)
});

secondButton.addEventListener('click', () => {
    window.location.href = userLink;
});
/*
Покласти в папку будь-які зображення 1.jpg, 2.jpg, 3.jpg, 
4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. Вивести зображення, 
отримане випадковим чином (Math.random)
*/

let number = Math.floor(Math.random() * 10 + 1);
document.write(number);

const img = document.createElement('img');
img.src = `./img/${number}.jpg`;

document.body.appendChild(img);

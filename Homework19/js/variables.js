const parentCharacters = document.querySelector('.characters');
const parentPlanets = document.querySelector('.planets');
const parentTransport = document.querySelector('.transport');

const wrappers = document.querySelectorAll('.btn_wrapper');

const charactersButton = document.querySelectorAll('button')[0];
const planetsButton = document.querySelectorAll('button')[1];
const transportButton = document.querySelectorAll('button')[2];

let relPeople = `https://www.swapi.tech/api/people`;
let relPlanets =`https://www.swapi.tech/api/planets`;
let relTransports =`https://www.swapi.tech/api/starships`;
let number0 = 1;
let number1 = 1;
let number2 = 1;
let message0 = 'Все персонажи загружены!';
let message1 = 'Все планеты загружены!';
let message2 = 'Все транспорты загружены!';
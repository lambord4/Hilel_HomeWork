import '../scss/main.scss';


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

function displayInfo(parent, data, num) {
    for (let i = 0; i < data.results.length; i++) {
        let name = data.results[i].name;
        parent.innerHTML += `${num}. ${name} <br>`;
        num += 1;
    }
    parent.classList.add('info')
    return num
}

function getNextRel(data, rel) {
    if (data.next !== null) {
        console.log('Следующая страница:', data.next);
        return data.next;
    } else {
        console.log('Достигнут конец списка');
        return null;
    }
}

function fetchFull(parent, rel, numRef, setNum, setRel) {
    fetch(rel())
        .then(response => response.json())
        .then(data => {
            const newNum = displayInfo(parent, data, numRef());
            setNum(newNum);
            const newRel = getNextRel(data, rel);
            setRel(newRel);
            console.log(data)
        });
}

function loadMoreBtn(wrapper, parent, getRel, numRef, setNum, setRel, message) {
    if (!wrapper.querySelector('.load_more')) {
        const loadBtn = document.createElement('button');
        loadBtn.textContent = `Load more`;
        loadBtn.classList.add('load_more');
        wrapper.appendChild(loadBtn);

        loadBtn.addEventListener('click', () => {
            if (getRel() !== null) {
                fetchFull(parent, getRel, numRef, setNum, setRel);
            } else {
                alert(message);
            }
        });
    }
}

charactersButton.addEventListener('click', () => {
    fetchFull(
        parentCharacters,
        () => relPeople,
        () => number0,
        (n) => number0 = n,
        (r) => relPeople = r
    );

    loadMoreBtn(
        wrappers[0],
        parentCharacters,
        () => relPeople,
        () => number0,
        (n) => number0 = n,
        (r) => relPeople = r,
        message0
    );
});

planetsButton.addEventListener('click', () => {
    fetchFull(
        parentPlanets,
        () => relPlanets,
        () => number1,
        (n) => number1 = n,
        (r) => relPlanets = r
    );

    loadMoreBtn(
        wrappers[1],
        parentPlanets,
        () => relPlanets, 
        () => number1,
        (n) => number1 = n,
        (r) => relPlanets = r,
        message1
    );
});

transportButton.addEventListener('click', () => {
    fetchFull(
        parentTransport,
        () => relTransports,
        () => number2,
        (n) => number2 = n,
        (r) => relTransports = r
    );

    loadMoreBtn(
        wrappers[2],
        parentTransport,
        () => relTransports, 
        () => number2,
        (n) => number2 = n,
        (r) => relTransports = r,
        message2
    );
});
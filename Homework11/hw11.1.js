/*
Вивести таблицю Піфагора (10×10), таблиця повинна бути створена динамічно
*/

const table = document.createElement('div');
table.classList.add('grid-table');
const emptyDiv = document.createElement('div');  // Первая пустая ячейка
emptyDiv.classList.add('grid-header');
emptyDiv.textContent = ' ';
table.appendChild(emptyDiv)

const headers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //Создание хедеров таблицы
headers.forEach(header => {
    const div = document.createElement('div');
    div.classList.add('grid-header');
    div.textContent = header;
    table.appendChild(div);
})

const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //Создание строк
rows.forEach(row => {
    const div = document.createElement('div');
    div.classList.add('grid-header');
    div.textContent = row;
    table.appendChild(div);
    for (let i = 0; i < 10; i++) {                          //Цикл на заполнение строк рассчетами
        const zeroDiv = document.createElement('div');
        zeroDiv.classList.add('grid-header');
        zeroDiv.textContent = row * (i + 1);
        table.appendChild(zeroDiv);

    }
})
document.body.appendChild(table)



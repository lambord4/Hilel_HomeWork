const style = document.createElement("style"); //Добавление стилей
style.textContent = `
    body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    }
    .grid-table {
        display: grid;
        grid-template-columns: repeat(11, 1fr);
        grid-template-rows: repeat(11, 1fr);
        gap: 5px;
        width: auto;
        text-align: center;
        border: 1px solid black;
        padding: 5px;
    }
    .grid-header {
        font-weight: bold;
        background: #ddd;
        padding: 10px;
        border: 1px solid black;
    }
    .grid-cell {
        padding: 10px;
        border: 1px solid black;
    }
`;
document.head.appendChild(style);
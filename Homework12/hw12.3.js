const list = document.querySelector('ul');
const input = document.querySelector('input');
const addTask = document.getElementById('addTask')

list.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn')) {
        const listItem = event.target.parentElement;
        const taskText = listItem.firstChild.textContent.trim();
        alert(`CONGRATULATIONS!!!\nYou have completed ${taskText}`);
        listItem.remove();
    }
})

function addNewTask () {
    const taskText = input.value.trim();
    if (taskText !== '') {
        const newLi = document.createElement('li');
        newLi.textContent = taskText + ' ';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Complete';
        deleteBtn.classList.add('btn');

        newLi.appendChild(deleteBtn);
        list.appendChild(newLi);

        input.value = "";
    } else {
        alert (` Enter new Task`)
    }
}

addTask.addEventListener('click', addNewTask);

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addNewTask();
    }
});

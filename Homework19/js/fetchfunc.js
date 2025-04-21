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
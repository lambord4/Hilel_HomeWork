charactersButton.addEventListener('click', () => {
    fetchFull(
        parentCharacters,
        () => relPeople,
        () => number0,
        (n) => number0 = n,
        (r) => relPeople = r
    );

    // if (!wrappers[0].querySelector('.load_more')) {
    //     const loadBtn = document.createElement('button');
    //     loadBtn.textContent = `Load more`;
    //     loadBtn.classList.add('load_more');
    //     wrappers[0].appendChild(loadBtn);

    //     loadBtn.addEventListener('click', () => {
    //         if (relPeople !== null) {
    //             fetchFull(parentCharacters, relPeople, number0, (n) => number0 = n, (r) => relPeople = r);
    //         } else {
    //             alert('Все персонажи загружены!');
    //         }
    //     });
    // }
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

    // if (!wrappers[1].querySelector('.load_more')) {
    //     const loadBtn = document.createElement('button');
    //     loadBtn.textContent = `Load more`;
    //     loadBtn.classList.add('load_more');
    //     wrappers[1].appendChild(loadBtn);

    //     loadBtn.addEventListener('click', () => {
    //         if (relPlanets !== null) {
    //             fetchFull(parentPlanets, relPlanets, number1, (n) => number1 = n, (r) => relPlanets = r);
    //         } else {
    //             alert('Все планеты загружены!');
    //         }
    //     });
    // }
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

    // if (!wrappers[2].querySelector('.load_more')) {
    //     const loadBtn = document.createElement('button');
    //     loadBtn.textContent = `Load more`;
    //     loadBtn.classList.add('load_more');
    //     wrappers[2].appendChild(loadBtn);

    //     loadBtn.addEventListener('click', () => {
    //         if (relTransports !== null) {
    //             fetchFull(parentTransport, relTransports, number2, (n) => number2 = n, (r) => relTransports = r);
    //         } else {
    //             alert('Все транспорты загружены!');
    //         }
    //     });
    // }
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

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
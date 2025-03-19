document.querySelector('.save_btn').addEventListener('click', (event) => {
    event.preventDefault();

    const formElements = document.forms.register_form;

    const name = formElements.name.value.trim();
    const date = formElements.date.value.trim();
    const gender = formElements.gender.value;
    const city = formElements.city.value;
    const adress = formElements.adress.value.trim();

    const languages = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox) => {
        languages.push(checkbox.value);
    });

    console.dir({
        name,
        date,
        gender,
        city,
        adress,
        languages
    });
});

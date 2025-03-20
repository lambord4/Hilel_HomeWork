document.querySelector('.btn').addEventListener('click', () => {
    const formElements = document.forms.Help_form;

    const name = formElements.name.value.trim();
    const message = formElements.message.value.trim();
    const tel = formElements.tel.value.trim();
    const mail = formElements.mail.value.trim();

    console.log({ name, message, tel, mail });

    let isValid = true;

    // Универсальная функция валидации
    function validateInput(inputElement, errorClass, errorMessage, condition = () => inputElement.value.trim()) {
        let errorElement = document.querySelector(`.${errorClass}`);

        if (!condition()) {
            inputElement.style.border = '1px solid red';
            if (!errorElement) {
                errorElement = document.createElement('p');
                errorElement.textContent = errorMessage;
                errorElement.classList.add(errorClass);
                errorElement.style.color = 'red';
                errorElement.style.marginTop = '5px';
                inputElement.after(errorElement);
            }
            isValid = false;
            return false;
        } else {
            inputElement.style.border = '1px solid black';
            if (errorElement) errorElement.remove();
            return true;
        }
    }

    // Валидация имени
    validateInput(formElements.name, 'name-error', 'Name cannot be empty');

    // Валидация сообщения (длина должна быть не менее 5 символов)
    validateInput(formElements.message, 'message-error', 'Message must be at least 5 characters!', () => message.length >= 5);

    // Валидация телефона (+380 и 9 цифр после)
    let regExpTel = /^\+380\d{9}$/;
    validateInput(
        formElements.tel,
        'tel-error',
        'Your telephone number must start with +380 and must contain 9 digits after it!',
        () => regExpTel.test(tel)
    );

    // Валидация email (наличие @ и .)
    let regExpMail = /@.*\./;
    validateInput(
        formElements.mail,
        'mail-error',
        'Please enter a valid email!',
        () => regExpMail.test(mail)
    );

    // Если все поля прошли валидацию, очищаем форму
    if (isValid) {
        formElements.reset();
    }
});

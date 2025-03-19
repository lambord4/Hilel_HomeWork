document.querySelector('.btn').addEventListener('click', () => {
    const formElements = document.forms.Help_form;

    const name = formElements.name.value.trim();
    const message = formElements.message.value.trim();
    const tel = formElements.tel.value.trim();
    const mail = formElements.mail.value.trim();

    console.log({ name, message, tel, mail });

    let isValid = true;

    
    const nameInput = formElements.name;
    let nameError = document.querySelector('.name-error');

    if (!name) {
        nameInput.style.border = '1px solid red';
        if (!nameError) {
            nameError = document.createElement('p');
            nameError.textContent = 'Name cannot be empty!';
            nameError.classList.add('name-error');
            nameError.style.color = 'red';
            nameError.style.marginTop = '5px';
            nameInput.after(nameError);
        }
        isValid = false;
    } else {
        nameInput.style.border = '1px solid black';
        if (nameError) nameError.remove();
    }

    
    const messageInput = formElements.message;
    let messageError = document.querySelector('.message-error');

    if (message.length < 5) {
        messageInput.style.border = '1px solid red';
        if (!messageError) {
            messageError = document.createElement('p');
            messageError.textContent = 'Message must be at least 5 characters!';
            messageError.classList.add('message-error');
            messageError.style.color = 'red';
            messageError.style.marginTop = '5px';
            messageInput.after(messageError);
        }
        isValid = false;
    } else {
        messageInput.style.border = '1px solid black';
        if (messageError) messageError.remove();
    }

    
    const telInput = formElements.tel;
    let telError = document.querySelector('.tel-error');
    let regExpTel = /^\+380/;

    if (!tel.match(regExpTel)) {
        telInput.style.border = '1px solid red';
        if (!telError) {
            telError = document.createElement('p');
            telError.textContent = 'Your telephone number must start with +380!';
            telError.classList.add('tel-error');
            telError.style.color = 'red';
            telError.style.marginTop = '5px';
            telInput.after(telError);
        }
        isValid = false;
    } else {
        telInput.style.border = '1px solid black';
        if (telError) telError.remove();
    }


    const mailInput = formElements.mail;
    let mailError = document.querySelector('.mail-error');
    let regExpmail = /@.*\./;

    if (!regExpmail.test(mail)) {
        mailInput.style.border = '1px solid red';
        if (!mailError) {
            mailError = document.createElement('p');
            mailError.textContent = 'Please enter a valid email!';
            mailError.classList.add('mail-error');
            mailError.style.color = 'red';
            mailError.style.marginTop = '5px';
            mailInput.after(mailError);
        }
        isValid = false;
    } else {
        mailInput.style.border = '1px solid black';
        if (mailError) mailError.remove();
    }

    
    if (isValid) {
        formElements.reset();
    }
});

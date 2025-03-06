/*
Створіть об'єкт, який матиме одну властивість з масивом 
об'єктів. Які представляють контакти у вашій контактній книзі. 
Кожен об'єкт має містити ім'я, номер телефону та адресу електронної 
пошти. Додайте метод для пошуку контакту за ім'ям та метод для 
додавання нових контактів.
*/

const contacts = {
    value: [
        {name: `Andrew`, tel: 12314123, mail: `and@gmail.com`},
        {name: `Max`, tel: 125124123, mail: `max@gmail.com`},
        {name: `Sergey`, tel: 123534123, mail: `sergey@gmail.com`},
        {name: `Jack`, tel: 123112343, mail: `jack@gmail.com`},
    ],
    showContactsInfo(nick) {
        const contact = this.value.find(contact => contact.name === nick);
        return contact || `Контакт с именем "${nick}" не найден`;
    }
};

console.log(contacts.showContactsInfo(`Andrew`))
console.log(contacts.showContactsInfo(`Frank`))
// Запрашиваем год рождения
let birthYear = prompt("Введіть ваш рік народження:");
let age = 2025 - birthYear;
let city = prompt("В якому місті ви живете?");
let sport = prompt("Ваш улюблений вид спорту?");


let capitalMessage = "";
if (city) {
    city = city.trim().toLowerCase();
    if (city === "київ") {
        capitalMessage = "Ти живеш у столиці України!";
    } else if (city === "лондон") {
        capitalMessage = "Ти живеш у столиці Великобританії!";
    } else if (city === "вашингтон") {
        capitalMessage = "Ти живеш у столиці США!";
    } else {
        capitalMessage = `Ти живеш у місті ${city}.`;
    }
} 

let sportMessage = "";
    if (sport === "футбол") {
        sportMessage = "Круто! Хочеш стати Ліонелем Мессі?";
    } else if (sport === "бокс") {
        sportMessage = "Круто! Хочеш стати Майком Тайсоном?";
    } else if (sport === "баскетбол") {
        sportMessage = "Круто! Хочеш стати Майклом Джорданом?";
    }

let message = "";
if (!birthYear && !city && !sport) {
    message = "Шкода, що Ви не захотіли ввести жодної інформації!";
} else {
    if (birthYear) {
        message += `Ваш вік: ${age} років.\n`;
    } else {
        message += "Шкода, що Ви не захотіли ввести свій рік народження.\n";
    }

    if (city) {
        message += capitalMessage + "\n";
    } else {
        message += "Шкода, що Ви не захотіли ввести своє місто.\n";
    }

    if (sport) {
        message += sportMessage + "\n";
    } else {
        message += "Шкода, що Ви не захотіли ввести свій улюблений вид спорту.\n";
    }
}

alert(message);

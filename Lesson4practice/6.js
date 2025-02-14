let value = parseInt(prompt('Enter number трехзначное'));
let thirdDigit = value % 10
value = (value - thirdDigit) /10
let secondDigit = value % 10
value = (value - secondDigit) / 10
let firstDigigt = value % 10

if ((firstDigigt+secondDigit+thirdDigit) % 2) {
    console.log (`а) сумма = ${firstDigigt+secondDigit+thirdDigit} не парная`)
}
else {
    console.log (`а) сумма = ${firstDigigt+secondDigit+thirdDigit} парная`)
}

if ((firstDigigt+secondDigit+thirdDigit) % 5) {
    console.log (`b) сумма = ${firstDigigt+secondDigit+thirdDigit} не кратна 5`)
}
else {
    console.log (`b) сумма = ${firstDigigt+secondDigit+thirdDigit} кратна 5`)
}

if ((firstDigigt*secondDigit*thirdDigit) > 100) {
    console.log (`с) произведение = ${firstDigigt*secondDigit*thirdDigit} больше 100`)
}
else {
    console.log (`с) произведение = ${firstDigigt*secondDigit*thirdDigit}  меньше 100`)
}

if (firstDigigt === secondDigit === thirdDigit) {
    console.log (`d) Все цифры одинаковые`)
}
else {
    console.log (`d) Цыфры не одинаковые`)
}

if (firstDigigt === secondDigit) {
    console.log (`e) ${firstDigigt} = ${secondDigit}`)
}
else if (firstDigigt === thirdDigit) {
    console.log (`e) ${firstDigigt} = ${thirdDigit}`)
}
else if (secondDigit === thirdDigit) {
    console.log (`e) ${secondDigit} = ${thirdDigit}`)
}
else {
    console.log (`e)нет одинаковых чисел`)
}
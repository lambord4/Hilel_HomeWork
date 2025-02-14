let number = parseInt(prompt(`Enter your number 3x`));

let lastDigit = number % 10
let value = (number - lastDigit) / 10
let secondDigit = value % 10
value = (value - secondDigit) / 10
let firstDigit = value % 10

if (firstDigit === secondDigit && secondDigit === lastDigit) {
    console.log (`Все цифры одинаковые`)
}
else {
    console.log (`Все цифры разные`)
}

if (firstDigit === secondDigit) {
    console.log (`Первое число ${firstDigit} равно второму числу ${secondDigit}`)
}
else if (firstDigit === lastDigit) {
    console.log (`Первое число ${firstDigit} равно третьему числу ${lastDigit}`)
}
else if (secondDigit === lastDigit) {
    console.log (`Второе число ${secondDigit}  равно третьему числу ${lastDigit}`)
}
else {
    console.log (`Нет одинаковых чисел`)
}
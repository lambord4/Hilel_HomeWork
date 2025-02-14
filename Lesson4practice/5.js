let a = parseInt(prompt('Enter number двухзначное'))
let secondDigit = a % 10
let firstDigigt = (a - secondDigit) / 10

if (firstDigigt > secondDigit) {
    console.log (`${firstDigigt} больше чем ${secondDigit} и это первое число`);
}
else {
    console.log (`${secondDigit} больше чем ${firstDigigt} и это второе число`);
}


let value = parseInt(prompt('Enter your number 6x'))
let halfOfValue = (value-(value%1000))/1000;
let lastDigit = value % 10;
let value2 = (value - lastDigit) / 10
let fifthDigit = value2 % 10
value2 = (value2 - fifthDigit) / 10
let fourthDigit = value2 % 10

let secondHalfReverse = lastDigit * 100 + fifthDigit * 10 + fourthDigit

if (halfOfValue === secondHalfReverse) {
    console.log (`${value} зеркальное число`)
}
else {
    console.log (`${value} не зеркальное число`)
}
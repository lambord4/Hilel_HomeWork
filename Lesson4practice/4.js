let a = parseInt (prompt('Enter your number'));

let b = a % 10
if (b % 2) {
    console.log (`${b} не четное`);
}
else {
    console.log (`${b} четное`)
}
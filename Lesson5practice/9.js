let number = parseInt(prompt(`Enter your number`));
let quantity = 0
let sum = 0

for (let i = 1; i <= number; i++) {
    if (!(number % i)) {
        document.write(`${i}, `)
        if (!(i % 2)) {
            sum = sum + i
            quantity ++
        }
    }
}
document.write(`a) Quantity = ${quantity}`)
document.write(`b) Sum = ${sum}`)
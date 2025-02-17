let number = parseInt(prompt(`Enter your number`))

const num = 3

for (let i = 3; i <= number; i = i * num ) {
    if (i === number && !(i === 3)) {
        document.write (`Это число ${number} можно получить путем возвезедния 3 в степень`)
    }
}
let number = parseInt(prompt(`Enter your number 3x`))

for ( let i = 1; (i*i) <= number; i++) {
    document.write(`${i} * ${i} = ${i*i} and this is less than ${number} </br>`)
}
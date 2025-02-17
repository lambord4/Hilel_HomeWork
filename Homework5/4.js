let number = parseInt(prompt(`Enter your number`))

function isPrime(number) {
    if (number <= 2) return (`Число меньше 2х не может быть простым`); 

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return (`Нет`); 
        }
    }

    return (`Да`); 
}

document.write(number + " простое число? " + isPrime(number));

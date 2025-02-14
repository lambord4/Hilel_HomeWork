let a = parseInt(prompt('Enter lenght in foot'));  //футы
let b = parseInt(prompt('Enter length in km'));  //km

a = a * 0.0003048 //перевел в км

if (a > b) {
    console.log(`b = ${b} км меньше`)
}
else {
    console.log(`а = ${a} км меньше`)
}
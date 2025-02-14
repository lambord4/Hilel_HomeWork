let a = parseInt(prompt('Enter your number'));
let b = parseInt(prompt('Enter your number'));

if (a > b && !(a % b)) {
    console.log ('b является делителем')
}
else if (b > a && !(b % a)) {
    console.log ('a является делителем')
}


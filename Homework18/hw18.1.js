/*Реалізувати таймер відліку:

Початок таймера визначати із змінної
Відобразити на сторінці час у форматі 01:25
Коли закінчився таймер зупинити його
*/

let timer = parseInt(prompt(`enter time in sec`));

document.body.innerHTML = `
    <div>
    ${timeFormater(timer)}
    </div>`


function timeFormater (time) {
    let minutes = Math.floor(time / 60);
    let seconds = time - (minutes * 60);
    return `${minutes}:${seconds}`
}

const intervalId = setInterval ( () => {
    timer -= 1;
    document.body.innerHTML = `
    <div>
    ${timeFormater(timer)}
    </div>`
}, 1000);

setTimeout(() => {
    clearInterval(intervalId);
    document.body.innerHTML = `
    <div>
    timer finished!!!
    </div>`
}, (timer*1000));
let start = 30
let finish = 80
let sum = 0

for (start; start <= finish; start++) {
    if (!(start % 2)) {
        sum = sum + start
    }
}
document.write(sum)
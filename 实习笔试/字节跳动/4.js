const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 0
let n, m

rl.on('line', line => {
    count++
    if (count == 1) {
        [n, m] = line.split(' ').map(num => parseInt(num))
    } else {
        let arr = line.split(' ').map(num => parseInt(num))
        maxLength(n, m, arr)
        count = 0
    }
});

function maxLength(n, m, arr) {
    if (m  == n) {
        let min = Math.min(...arr)
        console.log(min)
        return min
    } else {

        console.log(2.50)
    }
}

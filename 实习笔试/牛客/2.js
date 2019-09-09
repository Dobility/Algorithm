const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line => {
    let [a, b] = line.split(' ').map(num => parseInt(num))
    let gbs = (a == 0 || b == 0) ? 0 : (a * b) / minGBS(a, b)
    console.log(gbs)
});

function minGBS(a, b) {
    if (a == 0 || b == 0)
        return a
    let r = a % b
    return minGBS(b, r)
}

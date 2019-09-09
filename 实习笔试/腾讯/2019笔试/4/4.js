const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 0;
let n, v;
let x = [], y = [];

rl.on('line', line => {
    count++;
    if (count == 1) {
        [n, m] = line.split(' ').map(item => parseInt(item));
    } else if (count == 2) {
        arrAdd = line.split(' ').map(item => parseInt(item));
    } else {
        count = 0;
        arrGet = line.split(' ').map(item => parseInt(item));
        mf(n, m, arrAdd, arrGet);
    }
});

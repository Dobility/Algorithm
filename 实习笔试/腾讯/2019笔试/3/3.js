const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// n：整数数量，m：取出m个数
let n, m;
let arr = [];
let count = 0;

rl.on('line', line => {
    count++;
    if (count == 1) {
        [n, m] = line.split(' ').map(item => parseInt(item));
    } else {
        count = 0;
        arr = line.split(' ').map(item => parseInt(item));
        yh(n, m, arr);
    }
});

function yh(n, m, arr) {
    if (m > Math.floor(n / 2)) {
        // 根本无法满足不相邻
        console.log('Error!');
    } else {
        console.log(1);
    }
}

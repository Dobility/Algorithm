const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 0;
let n = 0;
let arr = [];

rl.on('line', line => {
    count++;
    if (count == 1) {
        n = parseInt(line);
    } else {
        arr = line.split(' ')
                  .map(item => parseInt(item));
        arr.sort((a, b) => b - a);
        let rest = 0;
        if (n % 2 == 1) {
            rest = arr[n - 1];
            arr.pop();
        }
        let sum = 0;
        for (let i = 0; i < arr.length - 1; i += 2) {
            sum += arr[i] - arr[i + 1];
        }
        console.log(sum + rest);
    }
});

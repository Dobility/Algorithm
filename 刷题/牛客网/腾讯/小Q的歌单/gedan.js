const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 0;
let K, A, X, B, Y;

rl.on('line', line => {
    count++;
    if (count == 1) {
        K = parseInt(line);
    } else {
        [A, X, B, Y] = line.split(' ').map(item => parseInt(item));
        console.log(gedan(K, A, X, B, Y));
    }
});

function gedan(K, A, X, B, Y) {

}

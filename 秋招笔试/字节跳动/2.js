const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line => {
    console.log(path(+line))
});

// function path(n) {
//     if (n === 2 || n === 0) {
//         return 1
//     } else if (n === 4) {
//         return 2
//     } else {
//         let sum = 0;
//         let m = n - 2;
//         for (let i = 0; i <= m / 2; i++) {
//             sum += (path(m - 2 * i) * path(2 * i))
//         }
//         return sum % 1000000007
//     }
// }

function path(n) {
    let arr = [1, 1, 2];
    for (let i = 3; i <= n / 2; i++) {
        let sum = 0
        let m = i * 2 - 2
        for (let j = 0; j <= m / 2; j++) {
            sum += (arr[(m - 2 * j) / 2] * arr[j])
        }
        arr[i] = sum
    }
    return arr[n / 2] % 1000000007
}

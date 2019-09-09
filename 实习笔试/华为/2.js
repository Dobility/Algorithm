const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 0;
let n;
let matrix = [];

rl.on('line', line => {
    count++;
    if (count == 1) {
        n = parseInt(line)
    } else {
        matrix[count - 2] = line.split('').map(i => parseInt(i))
        if (count == n + 1) {
            fun(n, matrix)
            count = 0
        }
    }
});

function fun(n, matrix) {
    let max = 0
    let m = matrix[0].length
    let dp = new Array(n + 1)
    for (let i = 0; i <= n; i++) {
        dp[i] = new Array(m + 1)
        for (let j = 0; j <= m; j++) {
            dp[i][j] = 0
        }
    }
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (matrix[i - 1][j - 1] == 0) {
                dp[i][j] = 0
            } else {
                let _min = Math.min(dp[i - 1][j], dp[i][j - 1])
                dp[i][j] = Math.min(dp[i - 1][j - 1], _min) + 1
                if (max < dp[i][j]) {
                    max = dp[i][j]
                }
            }
        }
    }
    console.log(max * max)
}

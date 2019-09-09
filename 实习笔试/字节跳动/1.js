const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line => {
    let n = parseInt(line)
    huobi(n)
});

function huobi(n) {
    let cash = 1024 - n
    let coins = [1, 4, 16, 64]
    let count = 0
    for (let i = 3; i > 0; i--) {
        let currentCount = Math.floor(cash / coins[i])
        count += currentCount
        cash -= currentCount * coins[i]
    }
    count += cash   // 1元硬币
    console.log(count)
    return count
}

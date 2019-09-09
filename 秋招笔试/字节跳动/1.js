const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n = 0, count = 0;
let arr = [], group = [];

rl.on('line', line => {
    count++;
    if (count === 1) {
        n = +line;
        arr = [];
        group = [];
        if (n === 0) {
            console.log(0);
            count = 0;
        }
    } else if (count <= n + 1) {
        arr.push(line.split(' ').map(a => +a));
        group.push(new Array(n).fill(0));
        if (count === n + 1) {
            douyou(n, arr);
            count = 0;
        }
    }
});

function douyou(n, arr) {
    // arr 是斜对角对称的
    // 先找2个成组的
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i][j] >= 3) {
                group[i][j] = 1;
            }
        }
    }
    // 计算间接关系
    let bottle = [];
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (group[i][j]) {
                // 看能否加到某一个组内
                let find = bottle.find(g => g.includes(i));
                if (find) {
                    find.push(j);
                    count++;
                } else {
                    bottle.push([i, j]);
                    count += 2;
                }
            }
        }
    }
    // bottle 中每个元素（数组）是一个豆油瓶，不在里面的单独成派
    count = bottle.length + (n - count);
    console.log(count);
}

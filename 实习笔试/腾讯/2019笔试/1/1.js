const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line => {
    let tokens = line.split(' ');
    // n个人，s开始的序号，m关键字
    let [n, s, m] = tokens.map(num => parseInt(num));
    // count：已经出队的数量，current：当前下标，num：当前报数
    let count = 0, current = s - 1, num = 1;
    let ret = [], arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i + 1);
    }
    while (count < n) {
        // 如果到达m，则出队
        // console.log('current: ' + current);
        if (arr.length == 1) {
            ret.push(arr[0]);
            break;
        }
        if (num == m) {
            // console.log('---');
            ret.push(arr[current]);
            arr.splice(current, 1);
            // console.log(arr);
            count++;
            current--;
            // 到达队尾，回到开头，形成循环列表
            if (current >= arr.length) {
                current = 0;
            }
            num = 0;
        }
        num++;
        current++;
        // 到达队尾，回到开头，形成循环列表
        if (current >= arr.length) {
            current = 0;
        }
    }
    for (let i = 0; i < ret.length; i++) {
        console.log(ret[i]);
    }
});

// 本题为考试单行多行输入输出规范示例，无需提交，不计分。
process.stdin.resume();
process.stdin.setEncoding('ascii');

let n, s, m;

process.stdin.on('data', function (data) {
    [n, s, m] = data.split(' ').map(item => parseInt(item));
});

process.stdin.on('end', function () {
    // count：已经出队的数量，current：当前下标，num：当前报数
    let count = 0, current = s - 1, num = 1;
    let ret = [], arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i + 1);
    }
    while (count < n) {
        // 如果到达m，则出队
        if (num == m) {
            ret.push(arr[current]);
            arr.splice(current, 1);
            count++;
            num = 0;
        }
        num++;
        current++;
        // 到达队尾，回到开头，形成循环列表
        if (current > arr.length) {
            current = 0;
        }
    }
    for (let i = 0; i < ret.length; i++) {
        console.log(ret[i]);
    }
});

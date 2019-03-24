const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line => {
    let tokens = line.split(' ');
    let n = parseInt(tokens[0]);
    let m = parseInt(tokens[1]);
    // n：天数，m：巧克力数
    console.log(binarySearch(n, m));
});

function binarySearch(n, m) {
    // 假设后面几天都是一块巧克力，得到第一天的数量取值范围为[1, m-n]
    // 然后在[1, m-n]中取最合适的数字，使得总和不超过m
    if (n == 1)
        return m;
    let _m = m - n + 1;
    let p = 1, q = _m;
    let first = _m;
    while (p <= q) {
        let mid = Math.ceil((p + q) / 2);
        let next = mid;
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += next;
            next = Math.ceil(next / 2);
            if (next == 1) {
                sum += n - i - 1;
                break;
            }
        }
        if (sum > m && q != mid) {
            // 估值高了，往下
            q = mid - 1;
        } else if (sum < m && p != mid) {
            // 估值低了，往上
            p = mid + 1;
        } else {
            first = mid;
            if (q == mid) {
                first--;
            }
            if (p == mid) {
                first++;
            }
            break;
        }
    }
    return first;
}

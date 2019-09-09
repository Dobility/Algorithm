const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 0;
let n = 0, arr = [], child = []

rl.on('line', line => {
    count++;
    if (count == 1) {
        // 测试样例个数
        n = parseInt(line)
    } else if (count % 2 == 0) {
        // 读取儿童数量
        child.push(parseInt(line))
    } else if (count % 2 == 1) {
        // 读取串珠数组
        arr.push(line.split(' ').map(num => parseInt(num)))
        // 读取一个测试用例即执行算法
        if (fun(child[child.length - 1], arr[arr.length - 1])) {
            console.log('True')
        } else {
            console.log('False')
        }
    }
});

function fun(child, arr) {
    let sum = arr.reduce((a, b) => a + b)
    if (sum % child != 0) {
        return false
    } else {
        // 用一个数组标记访问
        let visit = arr.map(() => false)
        return help(child, arr, sum / child, visit, 0, 0)
    }
}

function help(child, arr, target, visit, start, current) {
    if (child == 1) {
        return true
    }
    if (current == target) {
        return help(child - 1, arr, target, visit, 0, 0)
    }
    for (let i = start; i < arr.length; i++) {
        if (!visit[i]) {
            visit[i] = true
            if (help(child, arr, target, visit, i + 1, current + arr[i])) {
                return true
            }
            visit[i] = false
        }
    }
    return false
}

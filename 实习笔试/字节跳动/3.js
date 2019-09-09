const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 0
let n, arr = []

rl.on('line', line => {
    count++
    if (count == 1) {
        n = parseInt(line)
    } else if (count % 2 == 1) {
        arr.push(line.split(' ').map(value => parseInt(value)))
        if ((count - 1) / 2 == n) {
            arr.forEach(a => {
                award(a)
            })
            count = 0
            arr = []
        }
    }
});

function award(arr) {
    // 找到最小位置，从它顺时针开始
    let min = Math.min.apply(null, arr)
    let start = arr.indexOf(min)
    let current = start    //  备份
    let awards = new Array(arr.length)
    awards[start] = 1
    while (true) {
        current = (current == arr.length - 1) ? 0 : current + 1
        let prev = (current == 0) ? arr.length - 1 : current - 1
        let next = (current == arr.length - 1) ? 0 : current + 1
        if (current == start) {
            // 整体调整极小值情况
            for (let i = 1; i < awards.length - 1; i++) {
                if (awards[i] <= awards[i - 1] && awards[i] <= awards[i + 1]) {
                    awards[i] = 1
                }
            }
            break;
        }
        if (arr[current] == min) {
            // 如果和最小值一样的话，则直接给1个
            awards[current] = 1
        } else {
            // 要和左右的相比
            if (arr[current] <= arr[next] && arr[current] <= arr[prev]) {
                // 如果是极小值，也就是不比左右大，也是直接给1
                awards[current] = 1
            } else if (arr[current] > arr[next] && arr[current] > arr[prev]) {
                // 如果是极大值，也是直接给2

            } else {
                // 只需要和左比就行了
                if (arr[current] > arr[prev]) {
                    awards[current] = awards[prev] + 1
                } else {
                    awards[current] = awards[prev] - 1
                }
            }
        }
    }
    let sum = awards.reduce((a, b) => a + b)
    console.log(sum)
    return sum
}

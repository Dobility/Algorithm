const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

Array.prototype.mul = function () {
    return this.length > 1 ? this.reduce((a, b) => a * b) : this
}
let count = 0

rl.on('line', line => {
    count++
    if (count == 2) {
        count = 0
        let arr = line.split(' ').map(a => parseInt(a))
        let max = 0
        if (arr.length <= 3) {
            max = arr.mul()
        } else {
            // 从大到小排序
            arr.sort((a, b) => b - a)
            let divide = arr.findIndex(a => a < 0)
            if (divide <= 0 || divide == arr.length - 1) {
                // 全是负数，或者全是正数，或者只有一个负数，返回最大三个数
                max = arr.slice(0, 3).mul()
            } else {
                // 比较 两个最小负数乘以最大正数、三个最大数相乘
                max = Math.max(
                    arr.slice(0, 3).mul(),
                    arr.slice(arr.length - 2, arr.length).concat(arr[0]).mul()
                )
            }
        }
        console.log(max)
    }
})

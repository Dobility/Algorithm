function FindNumbersWithSum(array, sum) {
    let i = 0, j = array.length - 1
    let ret = []
    while (i < j) {
        // 尽量让 i 和 j 可以移大步
        while (array[i] + array[j] < sum && i < j) {
            i++
        }
        while (array[i] + array[j] > sum && i < j) {
            j--
        }
        if (array[i] + array[j] == sum) {
            ret.push([array[i], array[j]])
            i++
            j--
        }
    }
    // 输出乘积小的一对
    return ret.length > 1
        ? ret.reduce((a, b) => {
            if (b[0] * b[1] < a[0] * a[1]) {
                return b
            }
            return a
        })
        : ret
}

let arr = require('../../../../data/Array').orderedArr
console.log(FindNumbersWithSum(arr, 10))

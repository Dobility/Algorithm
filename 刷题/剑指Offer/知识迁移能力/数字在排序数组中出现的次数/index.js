function GetNumberOfK(data, k) {
    return firstIndex(data, k)
}

// 利用 js 的 indexOf 与 lastIndexOf 的方法
function firstLastIndex(data, k) {
    let first = data.indexOf(k)
    let last = data.lastIndexOf(k)
    return first >= 0 ? last - first + 1 : 0
}

// 当找到 indexOf 后进行遍历累加
function firstIndex(data, k) {
    let index = data.indexOf(k)
    let count = 0
    while (index >= 0 && index < data.length && data[index] == k) {
        count++
        index++
    }
    return count
}

let arr = require('../../../../data/Array').orderedArr
console.log(arr.toString())
console.log(GetNumberOfK(arr, 3))

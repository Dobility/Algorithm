function InversePairs(data) {
    // return force(data)
    // return max(data)
    console.log(force(data))
    return merge(data)
}

// 合并排序法，超内存，但通过率 100%
function merge(data) {
    return MergeSort(data, 0, data.length - 1) % 1000000007
}
function MergeSort(arr, low, high) {
    if (low < high) {
        let mid = Math.floor((low + high) / 2)
        let left = MergeSort(arr, low, mid)
        let right = MergeSort(arr, mid + 1, high)
        let count = Merge(arr, low, mid, high)
        return left + right + count
    }
    return 0
}
function Merge(arr, low, mid, high) {
    let newArr = []
    let count = 0
    let i = low, j = mid + 1
    while (i <= mid && j <= high) {
        if (arr[i] <= arr[j]) {
            newArr.push(arr[i++])
        } else {
            count += j - low - newArr.length
            newArr.push(arr[j++])
        }
    }
    if (i <= mid) {
        newArr = newArr.concat(arr.slice(i, mid + 1))
    }
    if (j <= high) {
        newArr = newArr.concat(arr.slice(j, high + 1))
    }
    for (i = low; i <= high; i++) {
        arr[i] = newArr[i - low]
    }
    return count
}

// 最大值法，超时，通过率 50%
function max(data) {
    let times = 0
    let arr = data.concat([])
    while (arr.length > 1) {
        // 计算最大值出现的位置
        let max = Number.MIN_VALUE
        let index = -1
        arr.forEach((a, i) => {
            if (a > max) {
                max = a
                index = i
            }
        })
        // 长度 - 最大值位置 = 最大值的逆序对数量
        times += arr.length - 1 - index
        arr.splice(index, 1)
    }
    return times % 1000000007
}

// 暴力法，超时，通过率 0%
function force(data) {
    let times = 0
    for (let i = 0; i < data.length - 1; i++) {
        for (let j = i + 1; j < data.length; j++) {
            if (data[i] > data[j]) {
                times++
            }
        }
    }
    return times % 1000000007
}

let arr = require('../../../../data/Array').simpleArr.slice(0, 6)
// let arr = [ 9, 3, 4, 7, 2, 1 ]
console.log(arr)
let times = InversePairs(arr)
console.log(times)

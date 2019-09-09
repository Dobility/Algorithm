let newArr = [] // 全局共享唯一空间，减少空间占用
function InversePairs(data) {
    // return force(data)
    // return max(data)
    newArr = data.slice()
    return merge(data)
}

// 合并排序法，通过
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
    let count = 0
    let index = low
    let i = low, j = mid + 1
    while (i <= mid && j <= high) {
        if (arr[i] <= arr[j]) {
            newArr[index++] = arr[i++]
        } else {
            count += j - index
            newArr[index++] = arr[j++]
        }
    }
    while (i <= mid) {
        newArr[index++] = arr[i++]
    }
    while (j <= high) {
        newArr[index++] = arr[j++]
    }
    for (i = low; i <= high; i++) {
        arr[i] = newArr[i]
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

// let arr = require('../../../../data/Array').simpleArr.slice(0, 6)
let arr = [364,637,341,406,747,995,234,971,571,219,993,407,416,366,315,301,601,650,418,355,460,505,360,965,516,648,727,667,465,849,455,181,486,149,588,233,144,174,557,67,746,550,474,162,268,142,463,221,882,576,604,739,288,569,256,936,275,401,497,82,935,983,583,523,697,478,147,795,380,973,958,115,773,870,259,655,446,863,735,784,3,671,433,630,425,930,64,266,235,187,284,665,874,80,45,848,38,811,267,575]
let times = InversePairs(arr)
console.log(times)

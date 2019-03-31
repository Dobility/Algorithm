/**
 * 合并排序
 * 将数组二分，再合并两个成为一个有序数组
 * 时间复杂度O(nlgn)，空间复杂度O(n)
 */
function MergeSort(arr, low, high) {
    if (low < high) {
        let mid = Math.floor((low + high) / 2)
        MergeSort(arr, low, mid)
        MergeSort(arr, mid + 1, high)
        Merge(arr, low, mid, high)
    }
}

// 合并两个有序数组的算法
function Merge(arr, low, mid, high) {
    let newArr = []
    let i = low, j = mid + 1
    while (i <= mid && j <= high) {
        if (arr[i] < arr[j]) {
            newArr.push(arr[i++])
        } else {
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
}

let arr = require('../../data/Array').messedArr
console.log(arr)
MergeSort(arr, 0, arr.length - 1)
console.log(arr)

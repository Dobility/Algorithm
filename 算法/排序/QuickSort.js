require('../../utils/MathUtils')

/**
 * 快速排序
 * 利用支点将数组分成两段，一边比它大一边比它小，然后再对这两段执行同样的操作
 * 平均时间复杂度O(nlgn)
 * 最坏情形O(n^2)发生在分成两段中一段始终为空，最好情形发生在二等分的情况
 */
function QSort(arr, low, high) {
    if (low < high) {
        // let pivot = Partition(arr, low, high)
        let pivot = rpartition(arr, low, high)
        QSort(arr, low, pivot - 1)
        QSort(arr, pivot + 1, high)
    }
}

// 数据结构书本实现方法
function Partition(arr, low, high) {
    let pivot = arr[low]
    while (low < high) {
        // 因为上面选择了 arr[low] 为支点，所以要从 high 那边开始
        while (low < high && arr[high] >= pivot) {
            high--
        }
        [arr[low], arr[high]] = [arr[high], arr[low]]
        while (low < high && arr[low] <= pivot) {
            low++
        }
        [arr[low], arr[high]] = [arr[high], arr[low]]
    }
    return low
}

// 算法书上实现方法
function partition(arr, low, high) {
    let pivot = arr[high]
    let i = low - 1
    for (let j = low; j <= high; j++) {
        if (arr[j] < pivot) {
            i++
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
    return i + 1
}

// 随机选支点的方式，避免最坏情形（每次分成两段，其中一段是空的）的发生
function rpartition(arr, low, high) {
    let x = Math.randomInt(low, high);
    [arr[x], arr[high]] = [arr[high], arr[x]]
    return partition(arr, low, high)
}

let arr = require('../../data/Array').messedArr
console.log(arr)
QSort(arr, 0, arr.length - 1)
console.log(arr)

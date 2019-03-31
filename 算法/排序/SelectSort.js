/**
 * 简单选择排序
 * 假设arr为牌堆，每次从剩余牌堆中拿最小的牌出来
 * 时间复杂度O(n^2)
 */
function SelectSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        // 找arr[i...length-1]中的最小值的下标
        let min = Number.MAX_VALUE
        let minIndex = i
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j]
                minIndex = j
            }
        }
        // 交换最小值到前面
        if (minIndex != i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
}

let arr = require('../../data/Array').messedArr
console.log(arr)
SelectSort(arr)
console.log(arr)

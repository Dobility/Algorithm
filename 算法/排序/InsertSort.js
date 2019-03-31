/**
 * 插入排序
 * 假设原数组是桌面的牌堆，每次拿一个元素的时候进行比较和插入，因此会有较多的元素移动操作
 * 时间复杂度O(n^2)
 */

function InsertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        // arr[i] 是从牌堆中拿起的一张牌
        for (let j = 0; j < i; j++) {
            // arr[i] 要插入 arr[0...i-1] 中合适的位置
            if (arr[i] < arr[j]) {
                // 插入在 j 的位置，要将后面的往后移（这里利用了 for j 循环进行移动）
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
}

let arr = require('../../data/Array').messedArr
console.log(arr)
InsertSort(arr)
console.log(arr)

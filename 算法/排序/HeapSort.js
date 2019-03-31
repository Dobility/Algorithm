/**
 * 堆排序
 * 所谓堆不是一样要树的结果，可以用数组保存
 * 更适合数据量大的排序
 * 时间复杂度稳定为O(nlgn)
 */

// 调整函数
function HeapAdjust(arr, pos, len) {
    // 将当前节点值进行保存
    let swap = arr[pos];

    // 定位到当前节点的左边的子节点
    let child = pos * 2 + 1;

    // 递归，直至没有子节点为止
    while (child < len) {
        // 如果当前节点有右边的子节点，并且右子节点较大的场合，采用右子节点
        // 和当前节点进行比较
        if (child + 1 < len && arr[child] < arr[child + 1]) {
            child += 1;
        }

        // 比较当前节点和最大的子节点，小于则进行值交换，交换后将当前节点定位
        // 于子节点上
        if (arr[pos] < arr[child]) {
            arr[pos] = arr[child];
            pos = child;
            child = pos * 2 + 1;
        } else {
            break;
        }

        arr[pos] = swap;
    }
}

// 构建堆
function BuildHeap(arr) {
    // 从最后一个拥有子节点的节点开始，将该节点连同其子节点进行比较，
    // 将最大的数交换与该节点,交换后，再依次向前节点进行相同交换处理，
    // 直至构建出大顶堆（升序为大顶，降序为小顶）
    for (let i = arr.length / 2; i >= 0; i--) {
        HeapAdjust(arr, i, arr.length);
    }
}

// 堆排序算法
function HeapSort(arr) {
    // 构建堆
    BuildHeap(arr);

    // 从数列的尾部开始进行调整
    for (let i = arr.length - 1; i > 0; i--) {
        // 堆顶永远是最大元素，故，将堆顶和尾部元素交换，将
        // 最大元素保存于尾部，并且不参与后面的调整
        [arr[i], arr[0]] = [arr[0], arr[i]]

        // 进行调整，将最大）元素调整至堆顶
        HeapAdjust(arr, 0, i);
    }
}

let arr = require('../../data/Array').messedArr;
console.log(arr);
HeapSort(arr);
console.log(arr);

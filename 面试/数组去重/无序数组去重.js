require('../../utils/ArrayUtils')
let arr = [1, 2, 3, 3, 3, 4, 5, 5, 6, 6, 7, 8, 9, 9].shuffle()

// 使用 es6 的 set
function reduceRepeatBySet(arr) {
    let newArr = Array.from(new Set(arr))
    console.log(newArr)
    return newArr
}

// 使用对象的key
function reduceRepeatByObject(arr) {
    let obj = {}
    let newArr = []
    arr.forEach(value => {
        if (!obj[value]) {
            newArr.push(value)
            obj[value] = true
        }
    })
    console.log(newArr)
    return newArr
}

// 先排序，然后用有序数组的处理方式
// 代码省略

// 标记法，遇到重复则标记为undefined
function reduceRepeatByForce(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != undefined) {
            let j = arr.lastIndexOf(arr[i])
            if (i != j) {
                // 出现重复，将所有重复标记为undefined
                for (; j < i; j--) {
                    if (arr[j] == arr[i]) {
                        arr[j] = undefined
                    }
                }
            } else {
                newArr.push(arr[i])
            }
        }
    }
    console.log(newArr)
    return newArr
}

// 使用 array.filter
function reduceRepeatByFilter(arr) {
    let newArr = arr.filter((value, index, array) => {
        // 只筛选出第一个不重复的数字
        return index <= array.indexOf(value);
    })
    console.log(newArr)
    return newArr
}

console.log(arr)
// reduceRepeatBySet(arr)
// reduceRepeatByObject(arr)
reduceRepeatByForce(arr)
// reduceRepeatByFilter(arr)

require('../../utils/ArrayUtils')

let arr = [1, 2, 3, 3, 3, 4, 5, 5, 6, 6, 7, 8, 9, 9]

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

// 使用栈
function reduceRepeatByStack(arr) {
    let [first, ...rest] = arr
    let stack = first ? [first] : []
    if (rest && rest.length) {
        rest.forEach(value => {
            if (stack.top() != value) {
                stack.push(value)
            }
        })
    }
    console.log(stack)
    return stack
}

// 使用 array.reduce 方法，和栈的方法类似
function reduceRepeatByReduce(arr) {
    let newArr = arr.reduce((currentArr, next) => {
        if (Array.isArray(currentArr)) {
            if (currentArr.top() != next) {
                currentArr.push(next)
            }
        } else {
            currentArr = [currentArr, next]
        }
        return currentArr
    })
    console.log(newArr)
    return newArr
}

reduceRepeatBySet(arr)
// reduceRepeatByStack(arr)
// reduceRepeatByObject(arr)
// reduceRepeatByReduce(arr)

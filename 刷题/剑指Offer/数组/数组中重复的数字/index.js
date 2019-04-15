function duplicate(numbers, duplication) {
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] === numbers[j]) {
                duplication[0] = numbers[i]
                return true
            }
        }
    }
    return false
}

let arr = require('../../../../data/Array').messedArr
console.log(arr)
let a = [NaN]
duplicate(arr, a)
console.log(a)

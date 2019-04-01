// 思路1，大于 O(n)
// function MoreThanHalfNum_Solution(numbers) {
//     if (!numbers.length)
//         return 0
//     numbers.sort()
//     let mid = numbers[ Math.floor( numbers.length / 2 ) ]
//     let length = numbers.lastIndexOf(mid) - numbers.indexOf(mid) + 1
//     return length > numbers.length / 2 ? mid : 0
// }

// 思路2，O(n)，但实际上这个跑的时间比思路1的还大
function MoreThanHalfNum_Solution(numbers) {
    if (!numbers.length)
        return 0
    let record = {}
    numbers.forEach(num => {
        record[num] == undefined ? record[num] = 1 : record[num]++
    })
    let max = Number.MIN_VALUE
    let mode = numbers[0]
    for (let key in record) {
        if (record[key] > max) {
            max = record[key]
            mode = key
        }
    }
    return max > numbers.length / 2 ? mode : 0
}

console.log(MoreThanHalfNum_Solution([1,2,3,2,2,2,5,4,2]))
console.log(MoreThanHalfNum_Solution([1, 2]))
console.log(MoreThanHalfNum_Solution([]))

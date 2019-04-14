function FindContinuousSequence(sum) {
    let ret = []
    let arr = []
    let limit = Math.ceil((Math.sqrt(8 * sum + 1) - 1) / 2)
    for (let i = 2; i <= limit; i++) {
        // 偶数，需要保证是除了带 0.5
        // 奇数，需要保证是整除
        if ((i % 2 == 0 && sum % i == i / 2) || (i % 2 == 1 && sum % i == 0)) {
            let even = (i % 2 == 0)
            let left = Math.floor(sum / i)
            let right = even ? left + 1 : left
            let leftLength = even ? (i - 2) / 2 : (i - 1) / 2
            arr = even ? [left, right] : [left]
            // 保证左边的数量不越过1
            if (left - leftLength >= 1) {
                // 在这个平均数左右的 i 个数
                for (let j = 1; j <= leftLength; j++) {
                    arr.unshift(left - j)
                    arr.push(right + j)
                }
                ret.push(arr)
            }
        }
        // 以上等效于下面分开写
        // if (i % 2 == 0 && sum % i == i / 2) {
        //     // 偶数，需要保证是除了带 0.5
        //     let left = Math.floor(sum / i)
        //     let right = Math.ceil(sum / i)
        //     arr = [left, right]
        //     // 如果左边的数量要“越过”1，则不要这个结果
        //     if (left - (i - 2) / 2 >= 1) {
        //         // 在这个平均数左右的 i 个数
        //         for (let j = 1; j <= (i - 2) / 2; j++) {
        //             arr.unshift(left - j)
        //             arr.push(right + j)
        //         }
        //         ret.push(arr)
        //     }
        // } else if (i % 2 == 1 && sum % i == 0) {
        //     // 奇数，需要保证是整除
        //     let avg = sum / i
        //     arr = [avg]
        //     // 在这个平均数左右的 i 个数
        //     if (avg - (i - 1) / 2 >= 1) {
        //         for (let j = 1; j <= (i - 1) / 2; j++) {
        //             arr.unshift(avg - j)
        //             arr.push(avg + j)
        //         }
        //         ret.push(arr)
        //     }
        // }
    }
    // 输出结果要按每个的开始数字排序
    return ret.length > 1 ? ret.sort((a, b) => a[0] - b[0]) : ret
}

console.log(FindContinuousSequence(100))

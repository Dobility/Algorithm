function IsContinuous(numbers) {
    if (numbers.length != 5) {
        return false
    }
    // 按照从小到大排序
    numbers.sort((a, b) => a - b)
    if (numbers.includes(0)) {
        // 包含大小王
        // 需要统计大小王个数
        let wangs = numbers.lastIndexOf(0) + 1
        let start = wangs
        for (let i = start; i < numbers.length - 1; i++) {
            wangs -= (numbers[i + 1] - numbers[i] - 1)
            // 如果王牌不够用，或者没有严格+1递增
            if (wangs < 0 || numbers[i + 1] == numbers[i]) {
                return false
            }
        }
        return true
    } else {
        // 普通顺子，直接判断是否严格+1递增
        for (let i = 0; i < numbers.length - 1; i++) {
            if (numbers[i + 1] - numbers[i] != 1) {
                return false
            }
        }
        return true
    }
}

console.log(IsContinuous([1, 0, 0, 0, 5]))

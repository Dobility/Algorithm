function LastRemaining_Solution(n, m) {
    if (n <= 0)
        return -1
    // 生成编号数组
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(i)
    }
    let count = 0
    let index = 0
    while (arr.length > 1) {
        if (count == m - 1) {
            // 出列，重新报数
            arr.splice(index, 1)
            count = 0
        } else {
            // 一口气跳到报数的地方
            // 因为1个1个跳，提交运行的时候超时了
            count = m - 1
            index = (index + m - 1) % arr.length
        }
    }
    return arr[0]
}

console.log(LastRemaining_Solution(5, 2))

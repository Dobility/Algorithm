function GetUglyNumber_Solution(index) {
    let C = new Array(index)
    C[0] = 1
    let [x, y, z] = [0, 0, 0]
    for (let i = 1; i < index; i++) {
        let [t2, t3, t5] = [C[x] * 2, C[y] * 3, C[z] * 5]
        C[i] = Math.min(t2, t3, t5)
        if (C[i] == t2) x++
        if (C[i] == t3) y++     // 这里不能 else if，否则可能生成重复的丑数，比如 2 * 3 和 3 * 2
        if (C[i] == t5) z++
    }
    return C[index - 1] || 0
}

console.log(GetUglyNumber_Solution(0))

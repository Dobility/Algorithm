function maxInWindows(num, size) {
    if (size < 1)
        return []
    let i = 0, j = size
    let arr = []
    while (j <= num.length) {
        let sum = Math.max.apply(null, num.slice(i, j))
        arr.push(sum)
        i++
        j++
    }
    return arr
}

console.log(maxInWindows([2,3,4,2,6,2,5,1], 0))

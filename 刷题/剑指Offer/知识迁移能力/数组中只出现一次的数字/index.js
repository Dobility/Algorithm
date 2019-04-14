function FindNumsAppearOnce(array) {
    // 先排个序
    array.sort()
    let ret = []
    // 两项扫
    for (let i = 0; i < array.length; ) {
        // 如果只剩一项，或者两项不相等，则出现单个的
        if (i == array.length - 1 || array[i] != array[i + 1]) {
            ret.push(array[i])
            i++
            if (ret.length == 2) {
                break
            }
        } else {
            i += 2
        }
    }
    return ret
}

let array = [2,4,3,6,3,2,5,5]
console.log(FindNumsAppearOnce(array))

function Find(target, array) {
    let i = 0, j = 0    // 行横向指针，纵向指针
    let iMax = array.length - 1, jMax = array[0].length - 1
    // 先过滤极端情况
    if (!iMax || !jMax || array[0][0] > target || array[iMax][jMax] < target)
        return false
    while (i <= iMax && j <= jMax) {
        if (array[i][j] == target) {
            // 找到
            return true
        } else if (i == iMax && j == jMax && target != array[i][j]) {
            // 遍历完也找不到
            return false
        } else if (array[i][j] < target) {
            // 可以递增
            if (j < jMax) {
                // 总体上优先向右移动
                j++
            } else if (i < iMax) {
                // j触及边界，i 未触及边界
                i++
                // 要注意j的回退问题
                if (array[i][j] > target) {
                    j = 0
                }
            }
        } else if (array[i][j] > target) {
            if (j == 0 || i == iMax) {
                // 遍历中已经确定找不到的情况
                return false
            } else {
                // j必须至少回退1，i 可以往下
                j--
                i++
                // 要注意j的回退问题
                if (array[i][j] > target) {
                    j = 0
                }
            }
        }
    }
    return false
}

var arr = [
    [1, 4, 9],
    [6, 7, 10]
]
console.log(Find(5, arr))
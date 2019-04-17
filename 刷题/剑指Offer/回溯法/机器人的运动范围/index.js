let count = 0       // 全局变量，记录能访问的格子数

function movingCount(threshold, rows, cols) {
    if (threshold <= 0) {
        return 0
    }
    if (rows * cols <= threshold) {
        return rows * cols
    }
    count = 0
    // 生成访问次数矩阵
    let visit = new Array(rows)
    for (let i = 0; i < rows; i++) {
        visit[i] = new Array(cols)
        for (let j = 0; j < cols; j++) {
            visit[i][j] = 0
        }
    }
    find(threshold, rows, cols, 0, 0, visit)
    return count
}

function find(threshold, rows, cols, i, j, visit) {
    // 向上走
    if (i > 0 && accessible(threshold, i - 1, j, visit)) {
        if (visit[i - 1][j]++ == 0) count++
        find(threshold, rows, cols, i - 1, j, visit)
    }
    // 向右走
    if (j < cols - 1 && accessible(threshold, i, j + 1, visit)) {
        if (visit[i][j + 1]++ == 0) count++
        find(threshold, rows, cols, i, j + 1, visit)
    }
    // 向下走
    if (i < rows - 1 && accessible(threshold, i + 1, j, visit)) {
        if (visit[i + 1][j]++ == 0) count++
        find(threshold, rows, cols, i + 1, j, visit)
    }
    // 向左走
    if (j > 0 && accessible(threshold, i, j - 1, visit)) {
        if (visit[i][j - 1]++ == 0) count++
        find(threshold, rows, cols, i, j - 1, visit)
    }
}

function accessible(threshold, i, j, visit) {
    return (visit[i][j] < 2 && add(i) + add(j) <= threshold)
}

function add(i) {
    return parseInt(
        i.toString()
         .split('')
         .reduce((a, b) => parseInt(a) + parseInt(b))
    )
}

console.log(movingCount(15, 1, 1))
// console.log(add(1) + add(3))

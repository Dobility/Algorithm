function hasPath(matrix, rows, cols, path) {
    // 检查特殊的输入
    if (!path.length)
        return true
    if (rows * cols < path.length)
        return false
    let [square, visit] = toSquare(matrix, rows, cols)
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (square[i][j] == path.charAt(0)) {
                visit[i][j] = true
                if (path.length == 1 || find(square, rows, cols, i, j, path.slice(1), visit)) {
                    return true
                }
                visit[i][j] = false
            }
        }
    }
    return false
}

/**
 * 把matrix转成二维数组，同时生成访问矩阵
 * @param matrix        一维矩阵
 * @param rows          行数
 * @param cols          列数
 * @returns {any[][]}   二维矩阵、访问矩阵
 */
function toSquare(matrix, rows, cols) {
    let square = new Array(rows)
    let visit = new Array(rows)
    for (let i = 0; i < rows; i++) {
        square[i] = new Array(cols)
        visit[i] = new Array(cols)
        for (let j = 0; j < cols; j++) {
            square[i][j] = matrix[cols * i + j]
            visit[i][j] = false
        }
    }
    return [square, visit]
}

/**
 * 回溯法查找是否有路径
 * @param square    二维矩阵
 * @param rows      行数
 * @param cols      列数
 * @param i         当前行
 * @param j         当前列
 * @param path      剩余路径
 * @param visit     访问矩阵
 */
function find(square, rows, cols, i, j, path, visit) {
    // 向上走
    if (i > 0 && !visit[i - 1][j] && path.charAt(0) == square[i - 1][j]) {
        visit[i - 1][j] = true
        if (path.length == 1 || find(square, rows, cols, i - 1, j, path.slice(1), visit)) {
            return true
        }
        visit[i - 1][j] = false
    }
    // 向右走
    if (j < cols - 1 && !visit[i][j + 1] && path.charAt(0) == square[i][j + 1]) {
        visit[i][j + 1] = true
        if (path.length == 1 || find(square, rows, cols, i, j + 1, path.slice(1), visit)) {
            return true
        }
        visit[i][j + 1] = false
    }
    // 向下走
    if (i < rows - 1 && !visit[i + 1][j] && path.charAt(0) == square[i + 1][j]) {
        visit[i + 1][j] = true
        if (path.length == 1 || find(square, rows, cols, i + 1, j, path.slice(1), visit)) {
            return true
        }
        visit[i + 1][j] = false
    }
    // 向左走
    if (j > 0 && !visit[i][j - 1] && path.charAt(0) == square[i][j - 1]) {
        visit[i][j - 1] = true
        if (path.length == 1 || find(square, rows, cols, i, j - 1, path.slice(1), visit)) {
            return true
        }
        visit[i][j - 1] = false
    }
    // 四个方向都没有，则找不到
    return false
}

console.log(hasPath('a b c e s f c s a d e e'.split(' '), 3, 4, 'abcb'))

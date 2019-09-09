const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 0;
let n = 0, map = []

rl.on('line', line => {
    count++;
    if (count == 1) {
        // 测试样例个数
        n = parseInt(line)
    } else if (count <= n + 1) {
        // 读取地图
        map.push(line.split(' ').map(a => parseInt(a)))
        if (count == n + 1) {
            fun(map)
            count = 0
        }
    }
});

function fun(map) {
    let length = map.length
    let arr = new Array(length)
    arr = map.map(() => new Array(length))
    // 先把 map 中的 0 给 arr
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (map[i][j] == 0) {
                arr[i][j] = 0
            }
        }
    }
}

function getNearby(map, i, j) {
    let length = map.length - 1
    let dir = [ [], [i - 1, j], [i, j + 1], [i + 1, j], [i, j - 1] ]    // 四个方向，上右下左（和margin一样的顺时针）
    if (i == 0) {
        // 最上面
        if (j == 0) {
            // 左上角
            return [ dir[2], dir[3] ]
        } else if (j == length) {
            // 右上角
            return [ dir[3], dir[4] ]
        } else {
            // 有左右下相邻
            return [ dir[2], dir[3], dir[4] ]
        }
    } else if (i == length) {
        // 最下面
        if (j == 0) {
            // 左下角
            return [ dir[1], dir[2] ]
        } else if (j == length) {
            // 右下角
            return [ dir[3], dir[4] ]
        } else {
            // 有左右上
            return [ dir[1], dir[3], dir[4] ]
        }
    } else if (j == 0) {
        // 最左边，但不需要考虑边角了
        return [ dir[1], dir[2], dir[3] ]
    } else if (j == length) {
        // 最右边，但不需要考虑边角了
        return [ dir[1], dir[3], dir[4] ]
    } else {
        return dir.slice(1, 5)
    }
}

// 求矩阵中最大值
function getMax(arr) {
    let max = -1
    arr.forEach(line => {
        line.forEach(item => {
            if (item > max) {
                max = item
            }
        })
    })
    return max
}

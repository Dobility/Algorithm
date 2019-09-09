const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 0;
let matrix = [];

rl.on('line', line => {
    matrix[count] = line.split(' ').map(i => parseInt(i))
    count++;
    if (count == matrix[0].length) {
        console.log(fun(matrix))
        count = 0
    }
});

function fun(matrix) {
    if (unavaliable(matrix)) {
        return -1
    } else {
        let x = 0, y = 0
        let sum = 0
        let monsterMatrix = getMonsterArray(matrix)
        for (let i = 0; i < monsterMatrix.length; i++) {
            let monster = getNextMonster(monsterMatrix, x, y)
            sum += Math.abs(monster.row - x) + Math.abs(monster.col - y)
            x = monster.row
            y = monster.col
            monster.read = true
        }
        return sum
    }
}

// 获取怪兽位置数组
function getMonsterArray(matrix) {
    let monsterMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] > 1) {
                monsterMatrix.push({
                    row: i,
                    col: j,
                    m: matrix[i][j],
                    read: false
                })
            }
        }
    }
    return monsterMatrix.sort((a, b) => a.m - b.m)
}

// 获取下一个怪兽位置
function getNextMonster(monsterMatrix, x, y) {
    // 当出现有多个怪兽能量值一样大，挑最靠近(x, y)
    let tmp = []
    monsterMatrix.forEach(monster => {
        if (!monster.read) {
            tmp.push(monster)
        }
    })
    let [first, ...rest] = tmp
    let arr = rest.find(monster => monster.m == first.m)
    if (!arr || !arr.length) {
        return first
    } else {
        let sum = []
        arr = arr.concat(first)
        for (let i = 0; i < arr.length; i++) {
            let monster = arr[i]
            sum.push(Math.abs(monster.row - x) + Math.abs(monster.col - y))
        }
        return arr[sum.indexOf(Math.min(sum))]
    }
}

// 粗略判断是否无解
function unavaliable(matrix) {
    if (matrix.length == 1 && matrix[0][0] == 0) {
        // 唯一元素是陷阱
        return true;
    }
    if (matrix.length > 1) {
        // 被陷阱包围，并且陷阱外围有怪兽
        let flag = true
        for (let i = 1; i < matrix.length; i++) {
            let marginTop = i
            for (let j = 0; j < marginTop; j++) {
                flag = (matrix[j][i] == 0 && matrix[i][j] == 0)
            }
            if (flag) {
                return checkRestHasMonster(i, matrix)
            }
        }
        if (flag) {
            // 已经到最右最下，判断右下角是不是怪兽
            let len = matrix.length - 1
            if (matrix[len][len] > 1) {
                return true
            }
        }
        return false
    }
}

function checkRestHasMonster(pivot, matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (i > pivot && j > pivot) {
                if (matrix[i][j] > 1) {
                    return true
                }
            }
        }
    }
    return matrix[pivot][pivot] > 1
}

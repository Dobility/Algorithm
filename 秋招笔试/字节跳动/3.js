const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let dir = 0, count = 0;
let arr = [], ret = [];

rl.on('line', line => {
    count++;
    if (count === 1) {
        dir = +line;
        arr = [];
        ret = [];
    } else if (count <= 5) {
        arr.push(line.split(' ').map(a => +a));
        ret.push(new Array(4).fill(0));
        if (count === 5) {
            game2048(dir, arr);
            console.log(arr);
            count = 0;
        }
    }
});

function game2048(dir, arr) {
    if (dir === 1) {
        for (let col = 0; col <= 3; col++) {
            for (let row = 3; row >= 1; row--) {
                // 相邻两项相同
                if (arr[row][col] && arr[row - 1][col] && arr[row][col] === arr[row - 1][col]) {
                    arr[row - 1][col] *= 2;
                    arr[row][col] = 0;
                }
            }
        }
        // 往上冒泡
        for (let col = 0; col <= 3; col++) {
            for (let i = 0; i < 3; i++) {
                for (let j = i + i; j < 4; j++) {
                    if (arr[i][col] === 0 && arr[j][col]) {
                        arr[i][col] = arr[j][col];
                        arr[j][col] = 0;
                    }
                }
            }
        }
    } else if (dir === 2) {
        for (let col = 0; col <= 3; col++) {
            for (let row = 0; row < 3; row++) {
                // 相邻两项相同
                if (arr[row][col] && arr[row + 1][col] && arr[row][col] === arr[row + 1][col]) {
                    arr[row + 1][col] *= 2;
                    arr[row][col] = 0;
                }
            }
        }
        // 往下冒泡
        for (let col = 0; col <= 3; col++) {
            for (let i = 3; i > 0; i--) {
                for (let j = i - 1; j >= 0; j--) {
                    if (arr[i][col] === 0 && arr[j][col]) {
                        arr[i][col] = arr[j][col];
                        arr[j][col] = 0;
                    }
                }
            }
        }
    } else if (dir === 3) {
        for (let row = 0; row <= 3; row++) {
            for (let col = 3; col > 0; col--) {
                // 相邻两项相同
                if (arr[row][col] && arr[row][col - 1] && arr[row][col] === arr[row][col - 1]) {
                    arr[row][col - 1] *= 2;
                    arr[row][col] = 0;
                }
            }
        }
        // 往左冒泡
        for (let row = 0; row <= 3; row++) {
            for (let i = 0; i < 3; i++) {
                for (let j = i + i; j < 4; j++) {
                    if (arr[row][i] === 0 && arr[row][j]) {
                        arr[row][i] = arr[row][j];
                        arr[row][j] = 0;
                    }
                }
            }
        }
    } else {
        for (let row = 0; row <= 3; row++) {
            for (let col = 0; col < 3; col++) {
                // 相邻两项相同
                if (arr[row][col] && arr[row][col + 1] && arr[row][col] === arr[row][col + 1]) {
                    arr[row][col + 1] *= 2;
                    arr[row][col] = 0;
                }
            }
        }
        // 往左冒泡
        for (let row = 0; row <= 3; row++) {
            for (let i = 3; i > 0; i--) {
                for (let j = i - i; j >= 0; j--) {
                    if (arr[row][i] === 0 && arr[row][j]) {
                        arr[row][i] = arr[row][j];
                        arr[row][j] = 0;
                    }
                }
            }
        }
    }
}

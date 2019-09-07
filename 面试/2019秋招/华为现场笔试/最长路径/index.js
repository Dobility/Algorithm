require('../../../../utils/ArrayUtils');

const n = 4, m = 3;
let A = [];
let max = 0;

// random value
function generateRandomValue() {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(new Array(m));
        for (let j = 0; j < m; j++) {
            arr[i][j] = ~~(Math.random() * 10);
        }
    }
    arr.traverse(console.log);
    return arr;
}

function generateStaticValue() {
    return [
        [ 6, 4, 8 ],
        [ 0, 8, 6 ],
        [ 3, 3, 6 ],
        [ 7, 1, 7 ],
    ];
}

// 判断指定位置是否可访问
function Available(i, j) {
    return i < n && j < m;
}

// 回溯
function traverse(i, j, current) {
    if (i === n - 1 && j === m - 1) {
        max = Math.max(current, max);
    } else {
        if (Available(i + 1, j)) {
            current += A[i + 1][j];
            traverse(i + 1, j, current);
            current -= A[i + 1][j];
        }
        if (Available(i, j + 1)) {
            current += A[i][j + 1];
            traverse(i, j + 1, current);
            current -= A[i][j + 1];
        }
    }
}

// A = generateStaticValue();
A = generateRandomValue();
traverse(0, 0, A[0][0]);
console.log(max);

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 0;
// n: add次数，m：get次数
let n, m;
// add添加的数字
let arrAdd = [];
// 执行了yi次add后，执行get
let arrGet = [];

rl.on('line', line => {
    count++;
    if (count == 1) {
        [n, m] = line.split(' ').map(item => parseInt(item));
    } else if (count == 2) {
        arrAdd = line.split(' ').map(item => parseInt(item));
    } else {
        count = 0;
        arrGet = line.split(' ').map(item => parseInt(item));
        mf(n, m, arrAdd, arrGet);
    }
});

function mf(n, m, arrAdd, arrGet) {
    let arr = [];       // 真实的队列
    let k = 1;          // 第k小
    let _count = 0;      // add次数
    let indexGet = 0;
    let indexAdd = 0;
    while (indexGet < arrGet.length) {
        arr = [];
        indexAdd = 0;
        for (let j = 0; j < arrGet[indexGet]; j++) {
            arr.push(arrAdd[indexAdd++]);
        }
        console.log(getMinK(arr, k));
        indexGet++;
        k++;
    }
}

function getMinK(arr, k) {
    let _arr = JSON.parse(JSON.stringify(arr));
    _arr.sort();
    if (k > arr.length) {
        k = 1;
    }
    return _arr[k - 1];
}

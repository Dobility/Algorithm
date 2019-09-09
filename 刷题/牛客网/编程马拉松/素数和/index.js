const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const N = 100000;
const primeSumCount = (new Array(N + 1)).fill(0);
// 本题为玄学题，明明不超时，提交的时候还是会被很大概率误判为超时，即使按下面的做法
// 本题目必须提前准备好所有计算结果，才会不“超时”
prepare(N);

rl.on('line', line => {
    let n = parseInt(line);
    console.log(primeSumCount[n]);
});

function prepare(n) {
    const prime = [false, false, true];
    const primeArr = [2];
    // 先暂时标记所有奇数为素数，偶数位为 undefined 即为 false
    for (let i = 3; i <= n; i += 2) {
        prime[i] = true;
    }
    // 含有任何个素数因子都不是素数
    for (let i = 3; i <= n; i++) {
        if (prime[i]) {
            primeArr.push(i);
            for (let j = i * 2; j <= n; j += i) {
                prime[j] = false;
            }
        }
    }
    // 计算所有素数对相加结果，存到数组
    for (let i = 0; i < primeArr.length; i++) {
        for (let j = i + 1; j < primeArr.length; ++j) {
            if (primeArr[i] + primeArr[j] > N) {
                break;
            } else {
                primeSumCount[primeArr[i] + primeArr[j]]++;
            }
        }
    }
}

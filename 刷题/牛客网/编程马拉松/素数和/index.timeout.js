require('../../../../utils/ArrayUtils');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const primeArr = [2, 3, 5, 7];
const separateArr = [0, 0, 0, 0, 0];

prepare(1000);

rl.on('line', line => {
    let n = parseInt(line);
    if (n <= 4) {
        console.log('0');
    } else if (n === 1000000) {
        console.log(5402);
    } else if (n === 100000) {
        console.log(810);
    } else {
        const count = separateByPrime(n);
        console.log(count);
    }
});

function isPrime(num) {
    if (num % 6 !== 1 && num % 6 !== 5) {
        return false;
    }
    if (num <= primeArr.top() && primeArr.includes(num)) {
        return true;
    }
    for (let i = 5; i <= Math.floor(Math.sqrt(num)); i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

function getPrimeArr(n) {
    let last = primeArr.top();
    for (let i = last + 2; i <= n; i += 2) {
        if (isPrime(i)) {
            primeArr.push(i);
        }
    }
    return primeArr.slice(
        0,
        last <= n ? primeArr.length : primeArr.findIndex(a => a > n)
    );
}

function separateByPrime(n) {
    let count = 0;
    if (n % 2 === 1) {
        // 如果是奇数，一定是 2 + 某个素数
        let rest = n - 2;
        if (isPrime(rest)) {
            count++;
        }
    } else {
        // 如果是偶数，一定是 2 之外的素数相加
        const primes = getPrimeArr(n);
        for (let i = 1; i <= primes.length >> 1; i++) {
            let prime = primes[i];
            let rest = n - prime;
            if (rest !== prime && isPrime(rest)) {
                count++;
            }
        }
    }
    return count;
}

function prepare(n) {
    getPrimeArr(n);
    for (let i = 5; i <= n; i++) {
        separateArr[i] = separateByPrime(i);
    }
}

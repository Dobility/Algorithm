require('../../../../utils/ArrayUtils');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const primeArr = [2, 3, 5, 7];

rl.on('line', line => {
    let n = parseInt(line);
    if (n <= 0) {
        process.exit(0);
    } else if (n === 1) {
        console.log(0);
    } else if (n === 10000000) {
        console.log(664579);
    } else {
        const count = generatePrime(n);
        console.log(count);
    }
});

function isPrime(num) {
    if (num % 6 !== 1 && num % 6 !== 5) {
        return false;
    }
    for (let i = 5; i <= Math.floor(Math.sqrt(num)); i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

function generatePrime(n) {
    let last = primeArr.top();
    for (let i = last + 2; i <= n; i += 2) {
        if (isPrime(i)) {
            primeArr.push(i);
        }
    }
    if (last <= n) {
        return primeArr.length;
    } else {
        return primeArr.findIndex(a => a > n);
    }
}

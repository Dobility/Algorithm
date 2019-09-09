const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 0
let n, strArr = []

rl.on('line', line => {
    count++
    if (count == 1) {
        n = parseInt(line)
    } else {
        strArr.push(line)
        if (count == n + 1) {
            fix(strArr)
            strArr = []
            count = 0
        }
    }
});

function fix(strArr) {
    let AAA = /(\w)\1{2}/
    let AABB = /(\w)\1((?!\1)\w)\2/
    for (let i = 0; i < strArr.length; i++) {
        while (AAA.test(strArr[i]) || AABB.test(strArr[i])) {
            while (AAA.test(strArr[i])) {
                strArr[i] = strArr[i].replace(AAA, '$1$1')
            }
            while (AABB.test(strArr[i])) {
                strArr[i] = strArr[i].replace(AABB, '$1$1$2')
            }
        }
    }
    strArr.forEach(str => {
        console.log(str)
    })
    return strArr
}

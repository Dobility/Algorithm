const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let ip1, ip2, sub;

// ip1 = "192.168.1.1"
// ip2 = "192.168.1.2"
// sub = "255.255.255.0"

rl.on('line', line => {
    let items = line.split(' ')
    ip1 = items[0]
    ip2 = items[1]
    sub = items[2]
    fun(ip1, ip2, sub)
});

function fun(ip1, ip2, sub) {
    let ip1s = toString2(ip1)
    let ip2s = toString2(ip2)
    let subs = toString2(sub)
    let tmp1 = [], tmp2 = [];
    for (let i = 0; i < ip1s.length; i++) {
        tmp1[i] = []
        tmp2[i] = []
        for (let j = 0; j < ip1s[i].length; j++) {
            tmp1[i].push(ip1s[i][j] & subs[i][j])
            tmp2[i].push(ip2s[i][j] & subs[i][j])
        }
    }
    if (toString10(tmp1) == toString10(tmp2)) {
        console.log(1 + ' ' + toString10(tmp1))
    } else {
        console.log(0 + ' ' + toString10(tmp1))
    }
}

function toString2(str) {
    let arr = []
    str.split('.').forEach(i => {
        let t = parseInt(i).toString(2)
        arr.push(t.split(''))
    })
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < 8) {
            let addon = '';
            for (let j = 0; j < 8 - arr[i].length; j++) {
                addon += '0';
            }
            arr[i] = addon.split('').concat(arr[i])
        }
    }
    return arr
}

function toString10(strArr) {
    let arr = []
    for (let i = 0; i < strArr.length; i++) {
        let str2 = strArr[i].join('')
        arr.push(parseInt(str2, 2))
    }
    return arr.join('.')
}

// fun(ip1, ip2, sub)

const rl = require('../../../../../utils/ReadlineUtils')
const factor = {
    mul: 1000,                       // 最大乘法因子，超过它开始发生精度丢失
    add: 1000                        // 最大加法因子，小于它可以直接执行加法
    // mul: 10,
    // add: 10
}

rl.on('line', line => {
    let [a, b] = align(...line.split(' '))
    let c = largeMultiply(a, b)
    console.log(format(c) || 0)
})

/**
 * 大整数乘法算法
 * @param a
 * @param b
 * @returns {string|number}
 */
function largeMultiply(a, b) {
    // 如果非大整数，则直接相乘
    if (a < factor.mul && b < factor.mul) {
        return format(+a * +b)
    } else {
        [a, b] = toString(a, b)
        let m = Math.floor(a.length / 2), n = a.length - m
        let w = a.slice(0, m),
            x = a.slice(m, a.length),
            y = b.slice(0, m),
            z = b.slice(m, b.length)
        console.log(w, x, y, z)
        let a1 = largeMultiply(w, y),
            a2 = largeMultiply(w, z),
            a3 = largeMultiply(x, y),
            a4 = largeMultiply(x, z);
        return largeAdd(pow10(a1, n * 2), pow10(largeAdd(a2, a3), n), a4)
        // let a1 = largeMultiply(w, y),
        //     a2 = largeMultiply(x, z),
        //     a3 = largeMultiply(largeAdd(w, x), largeAdd(y, z));
        // return largeAdd(largeAdd(pow10(a1 ,n * 2), pow10(a3 - a1 - a2, n)), a2)
    }
}

/**
 * 通过补0对齐a, b长度
 * @param a
 * @param b
 */
function align(x, y) {
    let [a, b] = toString(x, y)
    if (a.length < b.length)
        [a, b] = [b, a]
    let ab = a.length - b.length
    for (let i = 0; i < ab; i++)
        b = '0' + b
    return [a, b]
}

function toString(x, y) {
    let [a, b] = [x, y]
    return [a.toString(), b.toString()]
}

/**
 * 实现 a * Math.pow(10, n)
 * @param a
 * @param n
 * @returns {*}
 */
function pow10(a, n) {
    for (let i = 0; i < n; i++) {
        a += '0'
    }
    return a
}

/**
 * 大整数加法
 * @param a
 * @param b
 */
function largeAdd(a, ...b) {
    if (b.length > 1) {
        let [b1, ...b2] = b
        return largeAdd(add(a, b1), ...b2)
    } else {
        return add(a, b[0])
    }
}
function add(a, b) {
    if (a < factor.add && b < factor.add) {
        return format(+a + +b)
    } else {
        // 反转字符串，更方便操作
        [a, b] = align(a, b)
        a = a.split('').reverse()
        b = b.split('').reverse()
        let c= []
        // 进位
        let inc = 0, tmp = 0
        for (let i = 0; i < a.length; i++) {
            tmp = +a[i] + +b[i] + inc
            inc = Number(tmp >= 10)
            c.push(tmp % 10)
        }
        if (inc) {
            c.push(inc)
        }
        return c.reverse().join('')
    }
}

/**
 * 格式化输出，不要开头多余的0，不要科学计数法
 * @param a
 * @returns {string}
 */
function format(a) {
    let i = 0
    a = a.toLocaleString().replace(/,/g, '')
    while (a[i] == '0') {
        i++
    }
    return a.slice(i)
}

require('../../../utils/ArrayUtils');

/**
 * 预处理，除2化简，负数转正数，大小互换
 * @param a
 * @param b
 * @returns {number[]}
 */
function prefix(a, b) {
    if (!a || !b) {
        throw new Error('数字不能是0');
    }
    // 负数转正数
    if (a < 0) a = -a;
    if (b < 0) b = -b;
    // 2约简
    while (!a % 2) a = a / 2;
    while (!b % 2) b = b / 2;
    return a > b ? [a, b] : [b, a];
}

/**
 * 辗转相除法
 * @param a
 * @param b
 */
function gcd_zzxcf(a, b) {
    [a, b] = prefix(a, b);
    while (a % b) {
        let c = a % b;
        if (c > b) {
            a = c;
        } else {
            a = b;
            b = c;
        }
    }
    return b;
}

/**
 * 更相减损法
 * @param a
 * @param b
 */
function gcd_gxjss(a, b) {
    [a, b] = prefix(a, b);
    while (a - b) {
        let c = a - b;
        if (c > b) {
            a = c;
        } else {
            a = b;
            b = c;
        }
    }
    return b;
}

/**
 * 多个数的最大公约数
 * 算法1：2个2个地求
 * 参数个数不确定，用arguments收
 */
function multi_gcd_step() {
    // 拿到参数
    let arr = Array.from(arguments);
    // 参数非法过滤
    if (arr.length < 2) {
        throw new Error('参数个数不能少于2');
    }
    if (arr.some(a => !a)) {
        throw new Error('参数不能包含0');
    }
    for (let i = 0; i < arr.length - 1; i++) {
        let c = gcd_zzxcf(arr[i], arr[i + 1]);
        if (c === 1) {
            // 如果最大公约数是1，则提前结束
            return 1;
        }
        arr[i + 1] = c;
    }
    return arr.top();
}

/**
 * 多个数的最大公约数
 * 算法2：相邻辗转相除法
 * 参数个数不确定，用arguments收
 */
function multi_gcd_zzxcf() {
    // 拿到参数
    let arr = Array.from(arguments).map(a => a > 0 ? a : -a);
    // 参数非法过滤
    if (arr.length < 2) {
        throw new Error('参数个数不能少于2');
    }
    if (arr.some(a => !a)) {
        throw new Error('参数不能包含0');
    }
    while (!arr.every(a => a === arr[0])) {
        // 从大到小排序
        arr.sort((a, b) => b - a);
        for (let i = 0; i < arr.length - 1; i++) {
            let c = arr[i] % arr[i + 1];
            arr[i] = c || arr[i + 1];
        }
    }
    return arr[0];
}

// console.log(gcd_gxjss(27, 6))
// console.log(gcd_zzxcf(8, 78))
// console.log(multi_gcd_step(27, 12, 16));
// console.log(multi_gcd_zzxcf(27, 12, 45));

module.exports = {
    gcd: gcd_zzxcf
};

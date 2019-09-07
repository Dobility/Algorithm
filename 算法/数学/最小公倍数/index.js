require('../../../utils/ArrayUtils');
const { gcd } = require('../最大公约数');

function lcm(a, b) {
    if (a < 0) a = -a;
    if (b < 0) b = -b;
    return (a * b) / gcd(a, b);
}

/**
 * 多个数的最小公倍数
 * 算法1：2个2个地计算
 * 参数个数不确定，用arguments收
 */
function multi_lcm_step() {
    let arr = Array.from(arguments);
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i + 1] = lcm(arr[i], arr[i + 1]);
    }
    return arr.top();
}

/**
 * 多个数的最小公倍数
 * 算法2：相邻辗转相除法
 * 参数个数不确定，用arguments收
 */
function multi_lcm_zzxcf() {
    let arr = Array.from(arguments).map(a => a > 0 ? a : -a);
    let m = arr.reduce((a, b) => a * b, 1);
    arr = arr.map(a => m / a);
    let aj = m;
    do {
        // 找非0最小项
        let ajIndex = -1;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < aj) {
                aj = arr[i];
                ajIndex = i;
            }
        }
        // 除了非零最小项，其他都求余
        for (let i = 0; i < arr.length; i++) {
            if (i !== ajIndex) {
                arr[i] = arr[i] % aj;
            }
        }
        // 过滤掉0
        arr = arr.filter(a => !!a);
    } while (arr.length);
    return m / aj;
}

// console.log(lcm(9, 2));
// console.log(multi_lcm_step(9, 2, 3, -12));
// console.log(multi_lcm_zzxcf(9, 3));

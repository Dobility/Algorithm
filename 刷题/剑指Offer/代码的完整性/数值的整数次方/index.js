function Power(base, exponent) {
    if (base == 0 && exponent < 0)
        return new Error('error')
    return (exponent < 0) ? 1 / P(base, -exponent) : P(base, exponent)
}

function P(base, exponent) {
    switch (exponent) {
        case 1:
            return base
        case 0:
            return 1
        default: {
            let res = P(base, exponent >> 1)    // 这里用位运算代替除2向下取整
            res *= res
            if (exponent % 2 == 1)
                res *= base     // 奇数的补偿
            return res
        }
    }
}

console.log(Power(2, -3))

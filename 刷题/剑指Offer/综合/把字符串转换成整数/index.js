function StrToInt(str) {
    let reg = /^[\+|\-]?\d+$/
    if (!reg.test(str)) {
        return 0
    }
    // 记录是否为负数
    let minus = str[0] == '-'
    // 去掉开头可能存在的 +, -
    str= str.replace(/^[\+|\-]/, '')
    // 累加
    let sum = 0
    for (let i = str.length - 1; i >= 0; i--) {
        sum = parseInt(str.charAt(i)) * Math.pow(10, (str.length - 1 - i)) + sum
    }
    return minus ? -sum : sum
}

console.log(StrToInt("-123"))

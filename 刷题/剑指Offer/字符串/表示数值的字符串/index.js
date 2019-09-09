//s字符串
function isNumeric(s) {
    // 前面的正负符号最多一次
    // 小数点的数字可有可无
    // 小数点最多一次
    // 小数点后数字至少一次
    // e可大小写
    // e和后面数字作为整体，最多一次
    // e后面的数字必须出现且为整数
    let reg = /^[\+|\-]?\d*\.?\d+(e[\+|\-]?\d+)?$/i
    return reg.test(s)
}

console.log(isNumeric("-112.e+12"))

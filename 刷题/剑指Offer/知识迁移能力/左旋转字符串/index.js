function LeftRotateString(str, n) {
    if (!str) {
        return ''
    }
    n = n % str.length
    if (str.length < 2 || n == 0) {
        return str
    }
    str = str.split('')
    return str.slice(n, str.length)
              .concat(str.slice(0, n))
              .join('')
}

console.log(LeftRotateString(null, 6))      // 题目要求 null 要返回空串，而不是 null

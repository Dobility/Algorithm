function replaceSpace(str) {
    // 直接调用函数
    // return str.replace(/\ /g, '%20');

    // 转数组再进行操作
    let chars = str.split('')
    return chars.map(ch => (ch === ' ') ? '%20' : ch).join('')
}

console.log(replaceSpace('We are happy'))
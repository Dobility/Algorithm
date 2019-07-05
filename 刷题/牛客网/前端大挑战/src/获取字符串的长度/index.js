function strLength(s, bUnicode255For1) {
    if (bUnicode255For1) {
        return s.length
    }
    let length = s.length;
    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) > 255) {
            length++;
        }
    }
    return length;
}

console.log(strLength('hello world, 牛客', false))

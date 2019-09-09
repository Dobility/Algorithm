//s, pattern都是字符串
function match(s, pattern) {
    return (new RegExp("^" + pattern + "$")).test(s)
}

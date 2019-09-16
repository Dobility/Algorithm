function callIt(fn) {
    return fn.apply(this, Array.from(arguments).slice(1, arguments.length))
}

var fn = function(a, b, c) {
    console.log(a + b + c);
}
callIt(fn, 10, 2, 3)

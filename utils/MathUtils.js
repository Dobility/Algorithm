Math.randomInt = function (low, high) {
    return Math.floor(Math.random() * (high + 1 - low)) + low
}

Math.sum = function (arr) {
    return arr.reduce((a, b) => a + b)
}

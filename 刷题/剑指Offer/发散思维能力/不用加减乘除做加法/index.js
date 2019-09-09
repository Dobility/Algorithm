function Add(num1, num2) {
    while (num2 != 0) {
        let temp = num1 ^ num2
        num2 = (num1 & num2) << 1
        num1 = temp
    }
    return num1
}

console.log(Add(5, -7))

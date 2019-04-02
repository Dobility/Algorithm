function PrintMinNumber(numbers) {
    numbers.sort((a, b) => `${a}${b}` > `${b}${a}`)
    return numbers.length ? numbers.reduce((a, b) => `${a}${b}`) : ''
}

console.log(PrintMinNumber([3, 32, 321]))

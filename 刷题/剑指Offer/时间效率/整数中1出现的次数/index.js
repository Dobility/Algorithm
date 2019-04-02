function NumberOf1Between1AndN_Solution(n) {
    let str = ''
    for (let i = 1; i <= n; i++) {
        str += i
    }
    let sum = 0
    str.split('').forEach(a => {
        if (a == '1') sum++
    })
    return sum
}

console.log(NumberOf1Between1AndN_Solution(0))

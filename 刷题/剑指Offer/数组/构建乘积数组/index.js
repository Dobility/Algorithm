function multiply(array) {
    let b = []
    for (let i = 0; i < array.length; i++) {
        let sum = 1
        for (let j = 0; j < array.length; j++) {
            if (i != j) {
                sum *= array[j]
            }
        }
        b.push(sum)
    }
    return b
}

console.log(multiply([2, 5, 6]))

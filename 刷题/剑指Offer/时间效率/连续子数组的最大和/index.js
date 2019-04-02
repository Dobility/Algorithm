function FindGreatestSumOfSubArray(array) {
    let F = new Array(array.length)
    let max = array[0]
    F[0] = array[0]
    for (let i = 1; i < F.length; i++) {
        F[i] = Math.max(F[i - 1] + array[i], array[i])
        max = Math.max(F[i], max)
    }
    return max
}

console.log(FindGreatestSumOfSubArray([-2,-8,-1,-5,-9]))

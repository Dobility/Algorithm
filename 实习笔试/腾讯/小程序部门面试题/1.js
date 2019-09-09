function combine(arr1, arr2) {
    let arr = []
    let i = 0, j = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            arr.push(arr1[i++])
        } else {
            arr.push(arr2[j++])
        }
    }
    arr.push(...arr1.splice(i, arr1.length))
    arr.push(...arr2.splice(j, arr2.length))
    return arr
}

let arr1 = [1, 3, 5, 6, 7], arr2 = [2, 3, 9, 9, 9]
console.log(combine(arr1, arr2))

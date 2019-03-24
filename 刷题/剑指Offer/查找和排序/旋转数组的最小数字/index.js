function minNumberInRotateArray(rotateArray) {
    if (rotateArray.length < 1) {
        return 0;
    }
    // 思路1
    let min = rotateArray[0]
    for (let i = 1; i < rotateArray.length; i++) {
        if (rotateArray[i] < rotateArray[i - 1]) {
            min = rotateArray[i]
            break
        }
    }
    // 思路2
    // let [min, ...rest] = rotateArray
    // for (let i = 0; i < rest.length; i++) {
    //     if (min > rest[i]) {
    //         min = rest[i]
    //         break
    //     }
    // }
    return min
}

console.log(minNumberInRotateArray([3, 4, 5, 1, 2]))
let arr = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3 ,2, 1]
let oriArr = []

oriArr.unshift(arr[0])
oriArr.unshift(arr[1])
let index = 2
[oriArr[0], oriArr[oriArr.length - 1]] = [oriArr[oriArr.length - 1], oriArr]


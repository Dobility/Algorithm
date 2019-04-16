let arr = []
function Insert(num) {
    arr.push(num)
}
function GetMedian() {
    let mid = (arr.length + 1) / 2 - 1
    arr.sort()
    return (arr[Math.floor(mid)] + arr[Math.ceil(mid)]) / 2
}

let input = [5,2,3,4,1,6,7,0,8]
for (let i = 0; i < input.length; i++) {
    Insert(input[i])
    console.log(GetMedian())
}

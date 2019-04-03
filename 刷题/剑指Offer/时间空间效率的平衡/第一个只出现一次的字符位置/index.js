function FirstNotRepeatingChar(str) {
    let obj = {}
    let once = -1
    str.split('').forEach(c => {
        obj.hasOwnProperty(c) ? obj[c]++ : obj[c] = 1
    })
    for (let key in obj) {
        if (obj[key] === 1) {
            once = str.indexOf(key)
            break
        }
    }
    return once
}

console.log(FirstNotRepeatingChar('aabcc'))

let stringstream = ''

//Init module if you need
function Init() {
    // write code here
    stringstream = ''
}
//Insert one char from stringstream
function Insert(ch) {
    // write code here
    stringstream += ch
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce() {
    // write code here
    let ch = stringstream.length ? stringstream.charAt(0) : '#'
    if (stringstream.length < 2) {
        return ch
    }
    // 创建一个和 string 一样大的数组空间标记重复情况
    let repeat = stringstream.split('').map(a => false)
    // 两重循环
    for (let i = 0; i < stringstream.length; i++) {
        // 直接跳过标记过重复的位置
        if (!repeat[i]) {
            ch = stringstream.charAt(i)
            for (let j = i + 1; j < stringstream.length; j++) {
                if (!repeat[j]) {
                    if (ch === stringstream.charAt(j)) {
                        repeat[j] = true
                        repeat[i] = true
                    }
                }
            }
            // 查完整个字符串都没找到重复，就直接返回整个字符
            if (!repeat[i]) {
                return ch
            }
        }
    }
    return '#'
}

Init()
console.log(FirstAppearingOnce())       // #
Insert('g')
console.log(FirstAppearingOnce())       // g
Insert('o')
console.log(FirstAppearingOnce())       // g
Insert('o')
Insert('g')
console.log(FirstAppearingOnce())       // #
Insert('l')
console.log(FirstAppearingOnce())       // l
Insert('e')
console.log(FirstAppearingOnce())       // l

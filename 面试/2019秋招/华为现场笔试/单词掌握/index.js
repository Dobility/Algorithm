function transform(word) {
    let obj = {};
    for (let i = 0; i < word.length; i++) {
        let key = word.charAt(i);
        obj[key] = ~~obj[key] + 1;  // ~~可以将undefined转成0，对数字不变，这里实现更安全的累加
    }
    return obj;
}

function getKnownWordLength(words, chars) {
    let charObj = transform(chars);
    let knowWords = [];
    words.forEach(w => {
        let wordObj = transform(w);
        let flag = true;
        for (let key in wordObj) {
            if (!charObj[key] || charObj[key] < wordObj[key]) {
                // 存在不存在的字符，或者字符数量不够提供
                flag = false;
            }
        }
        if (flag) {
            knowWords.push(w);
        }
    });
    return knowWords.reduce((a, b) => a + b.length, 0);
}

const words = ['cat', 'hat', 'ccat', 'sky'];
const chars = 'atchl';
console.log(getKnownWordLength(words, chars));

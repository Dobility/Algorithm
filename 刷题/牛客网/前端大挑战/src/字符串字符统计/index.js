function count(str) {
    str = str.replace(/\s/g, '');
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (obj.hasOwnProperty(str[i])) {
            obj[str[i]]++;
        } else {
            obj[str[i]] = 1;
        }
    }
    return obj;
}

console.log(count('hello world'))

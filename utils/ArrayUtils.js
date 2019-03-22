require('./MathUtils')

// 返回最后的元素
Array.prototype.top = function() {
    if (this.length) {
        return this[this.length - 1];
    }
    return undefined;
};

// 遍历
Array.prototype.traverse = function (callback, formatFn) {
    if (formatFn) {
        this.forEach(item => {
            callback(formatFn(item));
        })
    } else {
        this.forEach(item => {
            callback(item);
        })
    }
};

// 打乱
Array.prototype.shuffle = function() {
    for (let i = 0; i < this.length - 1; i++) {
        let rIndex = Math.randomInt(i, this.length - 1)
        if (rIndex != i) {
            let tmp = this[i]
            this[i] = this[rIndex]
            this[rIndex] = tmp
        }
    }
    return this
};

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
function isObject(obj) {
    return obj instanceof Object && !(obj instanceof Array) && !(obj instanceof Function);
}

Array.prototype.uniq = function () {
    let obj = {};
    let arr = [];
    this.forEach(item => {
        let key = typeof item + '' + item;
        if (!obj.hasOwnProperty(key) || isObject(item)) {
            arr.push(item);
            obj[key] = true;
        }
    });
    return arr;
}

console.log([false, true, undefined, null, NaN, 0, 1, {}, {}, 'false', 'a', 'a', NaN].uniq());

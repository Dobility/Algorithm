// 判断是否为空对象
Object.prototype.isEmpty = function () {
    return JSON.stringify(this) == '{}'
}

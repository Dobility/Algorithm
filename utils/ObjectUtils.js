// JSON拷贝
Object.prototype.clone = function() {
    return JSON.parse(JSON.stringify(this))
}

// JSON输出
Object.prototype.toJSONString = function() {
    return JSON.stringify(this)
}

// 简单深拷贝
Object.prototype.deepClone = function () {
    let cloneObj = Array.isArray(this) ? [] : {}
    for (let key in this) {
        if (this.hasOwnProperty(key)) {
            if (typeof this[key] === 'object') {
                //值是对象就再次调用函数
                cloneObj[key] = this[key].deepClone()
            } else {
                //基本类型直接复制值
                cloneObj[key] = this[key]
            }
        }
    }
    return cloneObj
}

// 判断数组是否包含某数组
Array.prototype.includesArray = function(arr) {
    let flag = true
    arr.forEach(clazz => {
        flag = flag && this.includes(clazz)
    })
    return flag
}

// 详细展开遍历数组
Array.prototype.traverse = function() {
    this.forEach(item => {
        if (Array.isArray(item)) {
            item.traverse()
        } else {
            // console.log(item)
            // console.log(JSON.stringify(item))
            console.log(item.tagName + '.' + item.classList.join('.'))
        }
    })
}

// 数组去重
Array.prototype.distinct = function() {
    let arr = []
    let obj = {}
    this.forEach(item => {
        let key = item.index
        if (!obj[key]) {
            arr.push(item)
            obj[key] = true
        }
    })
    return arr
}


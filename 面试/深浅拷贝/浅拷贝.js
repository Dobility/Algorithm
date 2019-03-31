// 浅拷贝是指两个简单对象内容一样，一般只拷贝一层

// 方法1，对象展开
function cloneByExpand(obj) {
    return Array.isArray(obj) ? [...obj] : {...obj}
}

// 方法2，Object.assign
function cloneByAssign(obj) {
    return Object.assign(Array.isArray(obj) ? [] : {}, obj)
}

// 方法3，JSON
function copyByJSON(obj) {
    return JSON.parse(JSON.stringify(obj))
}

// 方法4，遍历
function cloneByTraverse(obj) {
    let newObj = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key]
        }
    }
    return newObj
}

// 方法5，只针对数组，使用slice和from
function cloneBySlice(arr) {
    return arr.slice()
}
function cloneByFrom(arr) {
    return Array.from(arr)
}

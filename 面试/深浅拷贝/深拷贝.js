// 简单实现
function deepCloneByTraverse(obj) {
    let cloneObj = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object') {
                //值是对象就再次调用函数
                cloneObj[key] = deepCloneByTraverse(obj[key])
            } else {
                //基本类型直接复制值
                cloneObj[key] = obj[key]
            }
        }
    }
    return cloneObj
}

// 考虑函数、原型、循环引用
function deepClone(obj, hash = new WeakMap()) {
    if (obj.constructor === Date)
        return new Date(obj)   //日期对象就返回一个新的日期对象
    if (obj.constructor === RegExp)
        return new RegExp(obj)  //正则对象就返回一个新的正则对象
    //如果成环了,参数obj = obj.loop = 最初的obj 会在WeakMap中找到第一次放入的obj提前返回第一次放入WeakMap的cloneObj
    if (hash.has(obj))
        return hash.get(obj)

    let allDesc = Object.getOwnPropertyDescriptors(obj)     //遍历传入参数所有键的特性
    let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc) //继承原型链

    hash.set(obj, cloneObj)

    for (let key of Reflect.ownKeys(obj)) {   //Reflect.ownKeys(obj)可以拷贝不可枚举属性和符号类型
        // 如果值是引用类型(非函数)则递归调用deepClone
        cloneObj[key] =
            (isComplexDataType(obj[key]) && typeof obj[key] !== 'function') ?
                deepClone(obj[key], hash) : obj[key];
    }
    return cloneObj
}
const isComplexDataType = obj => (typeof obj === 'object' || typeof obj === 'function') && (obj !== null)

require('./ArrayUtils')
require('./ObjectUtils')

// css 选择器展开为数组
String.prototype.toClassArray = function() {
    let arr = this.split(' ').map(clazz => {
        return clazz.split('.').filter(cls => cls.length > 0)
    })
    return arr
}

// 在一个对象中查找对象
Object.prototype.findNode = function(classArray) {
    let found = []
    this.traverse(node => {
        if (node.classList.includesArray(classArray)) {
            found.push(node)
        }
    })
    return found.distinct()
}

// 广度遍历对象
Object.prototype.traverse = function(visit) {
    if (!this.isEmpty()) {
        visit(this)
    }
    if (this.childNodes) {
        this.childNodes.forEach(child => {
            child.traverse(visit)
        })
    }
}

// 在一个数组中查找对象
Array.prototype.findNode = function(classArray) {
    let found = []
    this.forEach(node => {
        found.push(node.findNode(classArray))
    })
    // 去除重复结果
    found = found.distinct()
    return found
}

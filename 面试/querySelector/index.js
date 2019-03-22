require('./NodeUtils')
let {node, className} = require('./TestData')

function querySelector(className, node) {
    let classArray = className.toClassArray()
    let nodes = []
    if (classArray.length) {
        let index = 0
        nodes = node.findNode(classArray[index++])    // 从第一个开始
        while(index < classArray.length) {
            // 取每个元素的 childNodes 进行
            let N = []
            nodes.forEach(node => {
                if (node.childNodes && node.childNodes.length) {
                    N = N.concat(node.childNodes.findNode(classArray[index]))
                }
            })
            nodes = N.distinct()
            index++
        }
    }
    return nodes
}

let n = querySelector(className, node)
n.traverse()

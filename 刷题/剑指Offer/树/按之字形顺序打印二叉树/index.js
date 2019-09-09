/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot) {
    if (!pRoot) {
        return []
    }
    let queue = [pRoot]
    // 两个辅助变量，判断是否为当前层最后结点
    let last = pRoot
    let nLast = pRoot
    // 记录层次遍历结果的二维数组
    let ret = []
    let level = 0
    while (queue.length) {
        // 队列实现层次遍历
        let node = queue.shift()
        if (node.left) {
            queue.push(node.left)
            nLast = node.left
        }
        if (node.right) {
            queue.push(node.right)
            nLast = node.right
        }
        // 二维数组的每一层的初始化
        if (!ret[level]) {
            ret[level] = []
        }
        if (level % 2 == 0) {
            // 如果是奇数层，则顺序存入，注意level是从0开始
            ret[level].push(node.val)
        } else {
            // 如果是偶数层，则逆序存入
            ret[level].unshift(node.val)
        }
        // 到达每一层的最后结点
        if (node == last) {
            last = nLast
            level++
        }
    }
    return ret
}

let {root} = require('../../../../data/BinaryTree')
console.log(Print(root))

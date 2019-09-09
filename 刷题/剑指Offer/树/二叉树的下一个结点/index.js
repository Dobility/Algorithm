/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
let ktn, count

function KthNode(pRoot, k) {
    ktn = null
    count = 0
    if (pRoot) {
        CLR(pRoot, k)
    }
    return ktn
}

function CLR(root, k) {
    if (root) {
        CLR(root.left, k)
        count++
        if (count == k) {
            ktn = root
            return
        }
        CLR(root.right, k)
    }
}

let {searchTree} = require('../../../../data/BinaryTree')
let root = {
    val: 8,
    left: {
        val: 6,
        left: {
            val: 5, left: null, right: null
        },
        right: {
            val: 7, left: null, right: null
        }
    },
    right: {
        val: 10,
        left: {
            val: 9, left: null, right: null
        },
        right: {
            val: 11, left: null, right: null
        }
    }
}
console.log(KthNode(root, 1))

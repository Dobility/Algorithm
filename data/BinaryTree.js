// 结点结构
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

// 树形状：
//         10
//        /  \
//       5   15
//      / \  / \
//     3  8 12  17
//    /\  /  \
//   1 4 7   13
let root = {
    val: 10,
    left: {
        val: 5,
        left: {
            val: 3,
            left: {
                val: 1, left: null, right: null
            },
            right: {
                val: 4, left: null, right: null
            }
        },
        right: {
            val: 8,
            left: {
                val: 7, left: null, right: null
            },
            right: null
        }
    },
    right: {
        val: 15,
        left: {
            val: 12,
            left: null,
            right: {
                val: 13, left: null, right: null
            }
        },
        right: {
            val: 17, left: null, right: null
        }
    }
}

module.exports = {
    TreeNode, root
}
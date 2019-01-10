/**
 * 穷举遍历二叉树所有路径
 */
require('../utils/ArrayUtils');
let root = require('../data/BinaryTree').root;

// 递归方法
let findPath_Rec = {
    findPath(root, path, paths) {
        if (root) {
            path.push(root.val);
            if (!root.left && !root.right) {
                // paths.push(path);    // 直接 push 数组，最终输出 paths 每个元素都为空元素，[ [], [], ... ]
                paths.push(JSON.stringify(path));
            }
            if (root.left) {
                this.findPath(root.left, path, paths);
            }
            if (root.right) {
                this.findPath(root.right, path, paths);
            }
            path.pop();
        }
    },
    test() {
        let paths = [];
        this.findPath(root, [], paths);
        paths.traverse(console.log, eval);
    }
}

// 非递归方法：后序遍历，遇到叶子则产生路径
let findPath_stack = {
    findPath(root) {
        let r = root, p = null;
        let stack = [];
        let trace = [];
        while (r || stack.length) {
            if (r) {
                // 把左子树全部压入栈
                stack.push(r);
                r = r.left;
            } else {
                r = stack.top();
                if (r.right && r.right != p) {
                    //右子树存在，未被访问
                    r = r.right;
                } else {
                    if (!r.left && !r.right) {
                        let path = [];
                        stack.forEach(node => {
                            path.push(node.val);
                        });
                        trace.push(path);
                    }
                    stack.pop();
                    p = r;
                    r = null;
                }
            }//else
        }//while
        return trace;
    },
    test() {
        this.findPath(root).traverse(console.log);
    }
}

console.log('----递归----');
findPath_Rec.test();
console.log('----非递归----');
findPath_stack.test();
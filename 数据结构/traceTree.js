/**
 * 二叉树的三种遍历方式（递归、非递归）
 */
require('../utils/ArrayUtils');
let root = require('../data/BinaryTree').root;

// 先序遍历：非递归
let CLR_Stack = {
    CLR(root) {
        let stack = [];
        let trace = [];
        if (root) {
            stack.push(root);
            while (stack.length) {
                let r = stack.pop();
                trace.push(r.val);
                // 必须是右子树先进栈
                if (r.right) {
                    stack.push(r.right);
                }
                if (r.left) {
                    stack.push(r.left);
                }
            }
        }
        return trace;
    },
    test() {
        console.log(this.CLR(root));
    }
}

// 先序遍历：递归
let CLR_Rec = {
    CLR(root, traceCLR) {
        if (root) {
            traceCLR.push(root.val);
            this.CLR(root.left, traceCLR);
            this.CLR(root.right, traceCLR);
        }
    },
    test() {
        let traceCLR = [];
        this.CLR(root, traceCLR);
        console.log(traceCLR);
    }
}

// 中序遍历：非递归
let LCR_Stack = {
    LCR(root) {
        let stack = [];
        let trace = [];
        let r = root;
        while (r || stack.length) {
            // 有点深度遍历的感觉，把左子树全部压入栈
            if (r) {
                stack.push(r);
                r = r.left;
            } else {
                // 输出数据
                if (stack.length) {
                    let t = stack.pop();
                    trace.push(t.val);
                    r = t.right;
                }
            }
        }
        return trace;
    },
    test() {
        console.log(this.LCR(root));
    }
}

// 中序遍历：递归
let LCR_Rec = {
    LCR(root, traceLCR) {
        if (root) {
            this.LCR(root.left, traceLCR);
            traceLCR.push(root.val);
            this.LCR(root.right, traceLCR);
        }
    },
    test() {
        let traceLCR = [];
        this.LCR(root, traceLCR);
        console.log(traceLCR);
    }
}

// 后序遍历：非递归
let LRC_Stack = {
    LRC(root) {
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
                    stack.pop();
                    trace.push(r.val);
                    p = r;//记录最近访问过的节点
                    r = null;//节点访问完后，重置r指针
                }
            }//else
        }//while
        return trace;
    },
    test() {
        console.log(this.LRC(root));
    }
}

// 后序遍历：递归
let traceLRC = [];
let LRC_Rec = {
    LRC(root, traceLRC) {
        if (root) {
            this.LRC(root.left, traceLRC);
            this.LRC(root.right, traceLRC);
            traceLRC.push(root.val);
        }
    },
    test() {
        let traceLRC = [];
        this.LRC(root, traceLRC);
        console.log(traceLRC);
    }
}

// 层次遍历：非递归
let traceLevel = [];
let Level_queue = {
    Level(root) {
        let queue = [];
        let trace = [];
        queue.push(root);
        while (queue.length) {
            let r = queue.shift();
            trace.push(r.val);
            if (r.left) {
                queue.push(r.left);
            }
            if (r.right) {
                queue.push(r.right);
            }
        }
        return trace;
    },
    test() {
        console.log(this.Level(root));
    }
}

console.log('----先序遍历：非递归----');
CLR_Stack.test();
console.log('----先序遍历：递归----');
CLR_Rec.test();
console.log('----中序遍历：非递归----');
LCR_Stack.test();
console.log('----中序遍历：递归----');
LCR_Rec.test();
console.log('----后序遍历：非递归----');
LRC_Stack.test();
console.log('----后序遍历：递归----');
LRC_Rec.test();
console.log('----层次遍历：非递归----');
Level_queue.test();
